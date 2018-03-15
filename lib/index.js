var Rider = require('./Block.js')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var playerOne = new Rider(92, 296, 8, 8, 'aqua', 1);
var playerTwo = new Rider(692, 296, 8, 8, 'rgb(212, 37, 37)', -1);


document.addEventListener('keydown', keydownHandler)

var riderOneArray = [];
var riderTwoArray = [];

function gameLoop() {

  console.log(riderOneArray.length);

  playerOne.draw(context);
  playerTwo.draw(context);
  requestAnimationFrame(gameLoop);
  
  riderOneArray.push(drawnCoordinates().playerOneValues);
  riderTwoArray.push(drawnCoordinates().playerTwoValues);

  removePlayerOneValues(context);

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
  };
  
};

function drawnCoordinates() {
  //taking x, y coordinates from each rider and pushing them into arrays, each time the canvas is redrawn.
 

  var playerOneValues = {
    x: playerOne.x,
    y: playerOne.y,
  }

  var playerTwoValues = {
    x: playerTwo.x,
    y: playerTwo.y,
  }

  return {playerOneValues, playerTwoValues}
}

function removePlayerOneValues(context) {
  if (riderOneArray.length === 1000) {
    context.clearRect(riderOneArray[0].x, riderOneArray[0].y, 8, 8);
    riderOneArray.shift();
  }
  if (riderTwoArray.length === 1000) {
    context.clearRect(riderTwoArray[0].x, riderTwoArray[0].y, 8, 8);
    riderTwoArray.shift();
  }
}
