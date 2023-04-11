const baseCharacter = {
  health: 100,
  level: 1,
  strength: 0,
  int: 0,
}


const monk = {
  health: 120,
  level: 2,
  strength: 4,
  int: 6,
}

const warrior = {
  health: 120,
  level: 2,
  strength: 4,
  int: 6,
}

const enemy = {
  health: 20,
  attack: 5,
  defense: 3,

}

let gameState = {
  gameOver: false
}

const endGame = () => {
  console.log("Game OVeR )': !!! o': ")
  gameState.gameOver = true
}

function createCharacter () {

  const createWarrior = () => {
    return { ...baseCharacter, ...warrior };
  }

  return { ...baseCharacter, ...wisard };
}


const attack = (attacker, defender) => {
  const damage = attacker.attack - defender.defense
  if (damage > 0 ) {
    defender.health -= damage
    console.log(`Hit for ${damage} damage`)
  } else {
    console.log("Miss!")
  }
}


const playGame = () => {
  while (!gameState.gameOver) {

  }
}


