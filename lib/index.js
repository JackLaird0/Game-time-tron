var Rider = require('./Block.js')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var rightPress = false;
var leftPress = false;
var upPress = false;
var downPress = false;

var playerOne = new Rider(92, 296, 8, 8, 'navy', 1);
var playerTwo = new Rider(692, 296, 8, 8, 'rgb(212, 37, 37)', -1);


document.addEventListener('keydown', keydownHandler, false)

function gameLoop() {
  playerOne.draw(context);
  playerTwo.draw(context);
  requestAnimationFrame(gameLoop)
}

gameLoop()
function keydownHandler(e) {
  e.preventDefault(); 
  if (e.keyCode == 37 && playerTwo.xDir != 1) {
    //move left
    playerTwo.changeDir(-1, 0)
  } else if (e.keyCode == 39 && playerTwo.xDir != -1) {
    // move right
    playerTwo.changeDir(1, 0)
  } else if (e.keyCode == 38 && playerTwo.yDir != 1) {
    //move up
    playerTwo.changeDir(0, -1)
  } else if (e.keyCode == 40 && playerTwo.yDir != -1) {
    // move down
    playerTwo.changeDir(0, 1)
  };
  
  if (e.keyCode == 65 && playerOne.xDir != 1) {
    // move left
    playerOne.changeDir(-1, 0)
  } else if (e.keyCode == 68 && playerOne.xDir != -1) {
    // move right
    playerOne.changeDir(1, 0)
  } else if (e.keyCode == 87 && playerOne.yDir != 1) {
    // move up
    playerOne.changeDir(0, -1)
  } else if (e.keyCode == 83 && playerOne.yDir != -1) {
    // move down
    playerOne.changeDir(0, 1)
}
}

playerOne.draw(context);
playerTwo.draw(context);
