var Rider = require('./Rider.js')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var playerOne = new Rider(92, 296, 8, 8, '#b126f7', 1);
var playerTwo = new Rider(692, 296, 8, 8, '#f5ff33', -1);

document.addEventListener('keydown', event => keydownHandler(event, 'p1'))
document.addEventListener('keydown', event => keydownHandler(event, 'p2'))

var riderOneArray = [];
var riderTwoArray = [];

function gameLoop() {


  playerOne.draw(context);
  playerTwo.draw(context);
  requestAnimationFrame(gameLoop);
  
  riderOneArray.push(drawnCoordinates().playerOneValues);
  riderTwoArray.push(drawnCoordinates().playerTwoValues);

  removePlayerOneValues(context);
  gameOver();

  // console.log(playerOne.y);
  
  // console.log(playerOne.x);

}

// gameLoop()

function keydownHandler(e, p) {
  e.preventDefault(); 
  console.log(arguments)

  const playerInfo = {
    player: {p1: playerOne, p2: playerTwo},
    left:   {p1: 65, p2: 37},
    right:  {p1: 68, p2: 39},
    up:     {p1: 87, p2: 38},
    down:   {p1: 83, p2: 40},
  };

  if (e.keyCode == playerInfo.left[p] && playerInfo.player[p].xDir != 1) {
    //move left
    playerInfo.player[p].changeDir(-1, 0)
  } else if (e.keyCode == playerInfo.right[p] && playerInfo.player[p].xDir != -1) {
    // move right
    playerInfo.player[p].changeDir(1, 0)
  } else if (e.keyCode == playerInfo.up[p] && playerInfo.player[p].yDir != 1) {
    //move up
    playerInfo.player[p].changeDir(0, -1)
  } else if (e.keyCode == playerInfo.down[p] && playerInfo.player[p].yDir != -1) {
    // move down
    playerInfo.player[p].changeDir(0, 1)
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

function removePlayerOneValues(context, riderArray) {
  if (riderOneArray.length === 1000) {
    context.clearRect(riderOneArray[0].x, riderOneArray[0].y, 8, 8);
    riderOneArray.shift();
  }

  if (riderTwoArray.length === 1000) {
    context.clearRect(riderTwoArray[0].x, riderTwoArray[0].y, 8, 8);
    riderTwoArray.shift();
  }
}

function gameOver() {

//Wall Collision
  if (playerOne.x === 0 || playerOne.x === 800 || playerOne.y === 0 || playerOne.y === 600){
    alert('Player Two Wins')
  }

  if (playerTwo.x === 0 || playerTwo.x === 800 || playerTwo.y === 0 || playerTwo.y === 600){
    alert('Player One Wins')
  }

//Player to Player Collision
 for( var i = 0; i < riderOneArray.length; i++) {
   for( var j = 0; j < riderTwoArray.length; j++) {
     if (riderOneArray[i].x - 6 <= riderTwoArray[j].x && riderTwoArray[j].x <= riderOneArray[i].x + 6 &&
          riderOneArray[i].y - 6 <= riderTwoArray[j].y && riderTwoArray[j].y <= riderOneArray[i].y + 6) {
        if (i < j) {
          alert('Player One Wins')
        } else if (i > j) {
          alert('Player Two Wins')
          debugger
        } else {
          alert("Ya'll tried")
        }     
    }
   }
 }

 //Rider One Self Collision
 for(var i = 0; i < riderOneArray.length - 1 ; i++) {
  if(riderOneArray[riderOneArray.length -1].x - 6 > riderOneArray[i].x && riderOneArray[riderOneArray.length - 1].x + 6 > riderOneArray[i].x && 
    riderOneArray[riderOneArray.length -1].y - 6 > riderOneArray[i].y && riderOneArray[riderOneArray.length - 1].y + 6 > riderOneArray[i].y ) {
      alert('terducken')
      debugger
    }
 }

//Rider Two Self Collision
 for(var i = 0; i < riderTwoArray.length - 1 ; i++) {
  if(riderTwoArray[riderTwoArray.length - 1].x === riderTwoArray[i].x &&
   riderTwoArray[riderTwoArray.length - 1].y === riderTwoArray[i].y) {
     alert('Game OVER')
   }
}
      
}

 