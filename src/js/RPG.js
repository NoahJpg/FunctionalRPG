export const player = {
  name: "You",
  health: 50,
  level: 1,
  strength: 0,
  int: 0,
  attack: 5,
  defense: 0,
  gold: 0,
  exp: 0
}

export const enemy = {
  name: "Bill",
  health: 20,
  attack: 5,
  defense: 3,
  gold: 10
}

export const randomEnemy = () => {
  const names = ["Skeleton", "Giant Skeleton", "Tiny Skeleton", "Normal Zombie", "Unusual Zombie", "Not an enemy", "Vacuum Salesman", "Ghost that haunts you", "Ghost that does not haunt you"]
  const randomName = Math.floor(Math.random() * names.length);
  const name = names[randomName];
  const health 
  const gold = Math.floor(Math.random() * 50 ) +5;
}

export let gameState = {
  playerTurn: true,
  gameOver: false,
}
console.log(gameState);

export const endGame = (message) => {
  console.log(message)
  gameState.gameOver = true
}

export const switchPlayer = () => {
  if (!gameState.playerTurn) {
    gameState.playerTurn = true;
  } else {
    gameState.playerTurn = false;
  }
}

export const attack = (attacker, defender) => {
  const damage = Math.max(attacker.attack - defender.defense + Math.floor(Math.random() * 5) - 2, 0);
  if (damage > 0 ) {
    defender.health -= damage
    console.log(`${attacker.name} hit ${defender.name} for ${damage} damage`);
    return;
  } else {
    console.log("Miss!")
  } 
}

export const heal = () => {
  player.health += Math.floor(Math.random() * 25) + 2;
}

export const flee = () => {
  endGame("so sad, but you're alive I guess" + `you retire with ${player.gold}`)
}

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
        break;;
    }
      switchPlayer()
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
}

// playGame()

// window.onload = function() {
//   document.getElementById('start').onCLick(event) {
//     event.preventDefault();

//   }
// }