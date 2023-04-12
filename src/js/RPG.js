/* eslint-disable no-unused-vars */
const pause = async (ms) => new Promise(resolve => setTimeout(resolve, ms));
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const player = {
  name: "You",
  health: 50,
  level: 1,
  strength: 0,
  int: 0,
  attack: 8,
  defense: 2,
  gold: 25,
  exp: 0
};

export const createEnemy = (name, health, attack, defense, gold) => ({
  name,
  health,
  attack,
  defense,
  gold
});

export const randomEnemy = () => {
  const names = ["Regular Skeleton", "Giant Skeleton", "Tiny Skeleton", "Normal Zombie", "Unusual Zombie", "Not An Enemy", "Vacuum Salesman", "Ghost That Haunts You", "Ghost That Does Not Haunt You", "Kai: Destroyer of Worlds", "Noah: Hater of Skyrim", "Mike: Master of CSS", "BeastMaster Jake", "Loot Goblin", "Your Old College Roommate", "Sentient ChatGPT", "Santa (Mall Variant)", "Real Santa", "Billy Mays", "The Train Conductor from Polar Express", "Batman", "Mean Girl", "Your Dentist", "Debt Collector", "Jimmy John's Delivery Driver", "Friday's Code Review", "A Leggo You Just Stepped On", "Your Social Anxiety", "Your Wife's Boyfriend", "Water Bear", "Bug in This Game", "Chinese Balloon", "Global Variable", "YouTube Prankster", "HTML Enjoyer"];
  const randomName = Math.floor(Math.random() * names.length);
  const name = names[randomName];
  const health = Math.floor(Math.random() * 50 ) + 50;
  const attack = Math.floor(Math.random() * 12 ) + 3;
  const defense = Math.floor(Math.random() * 10 ) + 5;
  const gold = Math.floor(Math.random() * 50 ) + 5;
  return createEnemy(name, health, attack, defense, gold);
};


export let enemy = randomEnemy();

export let gameState = {
  playerTurn: true,
  gameOver: false,
};


export const endGame = (message) => {
  console.log(message);
  gameState.gameOver = true;
};

export const switchPlayer = () => {
  if (!gameState.playerTurn) {
    gameState.playerTurn = true;
  } else {
    gameState.playerTurn = false;
  }
};

export const attack = (attacker, defender) => {

  let damage = (attacker.attack - defender.defense) < 0 ? 1 : (attacker.attack - defender.defense);
  const crit = randomInt(0, 8) === 8;
  const missed = (randomInt(0,10) > 5);
  if (crit) {
    damage += (damage * 2);
  }
  console.log('missed', missed, 'damage', damage);
  if (!missed) {
    defender.health -= damage;
    console.log(`${attacker.name} hit ${defender.name} for ${damage} damage`);
    return;
  } else {
    console.log("Miss!");
  } 
};

export const heal = () => {
  player.health += Math.floor(Math.random() * 20) + 2;
};

export const flee = () => {
  player.health -= 3;
  endGame("The very act of fleeing lost you 3 health. So sad, but if you're still alive " + `you retire with ${player.gold} gold`);
};

export const playGame = () => {
  while (!gameState.gameOver) {
    if (gameState.playerTurn) {
      if (player.health <= 0) {
        endGame("Game over, you died ): " + `Enemy health = ${enemy.health}`);
      } else {
        console.log("Your turn");
        const input = prompt("What do you want to do? (attack/heal/flee)").trim().toLowerCase();
        switch(input) {
        case "attack":
          attack(player, enemy);
          break;
        case "heal":
          heal();
          break;
        case "flee":
          flee();
          break;
        default:
          console.log("Invalid input. Please choose between attack, heal, or flee.");
          break;
        }
        switchPlayer();
      }
    }
    else {
      if (enemy.health <= 0) {
        endGame("Enemy Vanquished! " + "You win! " + `Your current health = ${player.health} :O`);
      } else {
        console.log("Enemy turn");
        attack(enemy, player);
        switchPlayer();
      }
    }
  }
};

console.log('//////////////////////////////////////////////');
console.log('RPG.js RUN');
console.log('//////////////////////////////////////////////');

export const callTurnModal = (headline) => { // (headline, player)
  document.getElementById('modal-headline').innerHTML = headline;
  document.querySelector('#turn-modal > .modal-body').innerHTML = `
    <button id="attack-button">Attack</button>
    <button id="heal-button">Heal</button>
    <button id="flee-button">Flee</button>
  `;
  const attackButton = document.getElementById("attack-button");
  const healButton = document.getElementById("heal-button");
  const fleeButton = document.getElementById("flee-button");
  const startButton = document.getElementById("start-button");
  
  // Modal Buttons
  attackButton.addEventListener('click', () => {
    console.log('clicked attackButton');
    attack(player, enemy);
    updateEnemy(enemy);
  });
  healButton.addEventListener('click', () => {
    console.log('clicked healButton');
    heal();
    console.log(`player health: ${player.health}`);
    updatePlayer(player);

  });
  fleeButton.addEventListener('click', () => {
    console.log('clicked fleeButton');
    flee();
    updatePlayer(player);
  });
  startButton.addEventListener('click', () => {
    console.log('clicked startButton');
  });
  document.getElementById('turn-modal').classList.remove('obscured');
};

const updatePlayerAttributes = player => `
  <div><span class="attribute-label">Level </span>${player.level}</div>
  <div><span class="attribute-label">Strength:</span> ${player.strength}</div>
  <div><span class="attribute-label">Int:</span> ${player.int}</div>
  <div><span class="attribute-label">Attack:</span> ${player.attack}</div>
  <div><span class="attribute-label">Health:</span> ${player.health}</div>
  <div><span class="attribute-label">Defense:</span> ${player.defense}</div>
  <div><span class="attribute-label">Gold:</span> ${player.gold}</div>
  <div><span class="attribute-label">Exp:</span> ${player.exp}</div>
`;

const updateEnemyAttributes = enemy => `
  <div><span class="attribute-label">Health </span>${enemy.health}</div>
  <div><span class="attribute-label">Attack:</span> ${enemy.attack}</div>
  <div><span class="attribute-label">Defense:</span> ${enemy.defense}</div>
  <div><span class="attribute-label">Gold dropped:</span> ${enemy.gold}</div>
`;

export const updatePlayer = player => {
  document.getElementById('player-list').innerHTML = `
    <div class="player-list-entry">
      <h4>${player.name}</h4>
      ${updatePlayerAttributes(player)}
    </div>
    `;
};
export const updateEnemy = enemy => {
  document.getElementById('enemy-list').innerHTML = `
  <div class="player-list-entry">
    <h4>${enemy.name}</h4>
    ${updateEnemyAttributes(enemy)}
  </div>
  `;
};
/* eslint-disable no-unused-vars */