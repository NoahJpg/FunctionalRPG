/* eslint-disable no-unused-vars */
import "./css/styles.css";
import { player, enemy, randomEnemy, gameState, endGame, switchPlayer, attack, heal, flee, playGame, callTurnModal, updatePlayer, updateEnemy } from "./js/RPG.js";

window.addEventListener("load", () => {

  document.getElementById('start-turn-button').addEventListener('click', e => {
    callTurnModal(`<div>A WILD <span class="highlighted">${enemy.name.toUpperCase()}</span> DRAWS NEAR!<div>`);
  });

  updatePlayer(player);
  updateEnemy(enemy);

});
// window.onLoad = function() {
//   const attackButton = document.getElementById("attack-button");
//   const healButton = document.getElementById("heal-button");
//   const fleeButton = document.getElementById("flee-button");
//   const startButton = document.getElementById("start-button");
  

//   console.log('attackButton', attackButton)
//   console.log('attackButton', healButton)
//   console.log('attackButton', fleeButton)
  
//   attackButton.addEventListener('click', e => {
//     console.log('clicked attackButton')
//   });
//   healButton.addEventListener('click', e => {
//     console.log('clicked healButton')
//   });
//   fleeButton.addEventListener('click', e => {
//     console.log('clicked fleeButton')
//   });
//   startButton.addEventListener('click', e => {
//     console.log('clicked startButton')
//   });
//   document.getElementById('start').onClick = (event) => {
//     event.preventDefault();
//   }
// }

// playGame()

/* eslint-disable no-unused-vars */
