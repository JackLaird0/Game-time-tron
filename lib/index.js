var Rider = require('./Block.js')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var rightPress = false;
var leftPress = false;
var upPress = false;
var downPress = false;

var playerOne = new Rider(92, 296, 8, 8, 'blue');
var playerTwo = new Rider(692, 296, 8, 8, 'red');


document.addEventListener('keydown', keydownHandler, false)

function gameLoop() {
  playerOne.draw(context);
  playerTwo.draw(context);

  console.log('hey')
  requestAnimationFrame(gameLoop)
}

gameLoop()
function keydownHandler(e) {
  e.preventDefault();
  // move left
  // debugger; 
  if (e.keyCode == 37 && playerTwo.xDir != 1) {
    playerTwo.changeDir(-1, 0)
  } else if (e.keyCode == 39 && playerTwo.xDir != -1) {
    playerTwo.changeDir(1, 0)
  } else if (e.keyCode == 38 && playerTwo.yDir != 1) {
    playerTwo.changeDir(0, -1)
  } else if (e.keyCode == 40 && playerTwo.yDir != -1) {
    playerTwo.changeDir(0, 1)
  }
}

playerOne.draw(context);
playerTwo.draw(context);
