var Game = require('./Game')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


document.addEventListener('keydown', event => keydownHandler(event, 'p1'))
document.addEventListener('keydown', event => keydownHandler(event, 'p2'))

var game = new Game(context);

var riderOneArray = [];
var riderTwoArray = [];

game.gameLoop();

function gameLoop() {

  removePlayerValues(context);
  gameOver();
  // console.log(playerOne.count)

  // console.log(playerOne.y);
  
  // console.log(playerOne.x);

}

// gameLoop()

function keydownHandler(e, p) {
  e.preventDefault(); 

  const playerInfo = {
    player: {p1: game.playerOne, p2: game.playerTwo},
    left:   {p1: 65, p2: 37},
    right:  {p1: 68, p2: 39},
    up:     {p1: 87, p2: 38},
    down:   {p1: 83, p2: 40},
  };

  if (e.keyCode == playerInfo.left[p] && playerInfo.player[p].xDir != 1 && playerInfo.player[p].countx > 8) {
    //move left
    playerInfo.player[p].county = 0
    playerInfo.player[p].countx = 0
    playerInfo.player[p].changeDir(-1, 0)
  } else if (e.keyCode == playerInfo.right[p] && playerInfo.player[p].xDir != -1 && playerInfo.player[p].countx > 8) {
    // move right
    playerInfo.player[p].county = 0
    playerInfo.player[p].countx = 0
    playerInfo.player[p].changeDir(1, 0)
  } else if (e.keyCode == playerInfo.up[p] && playerInfo.player[p].yDir != 1 && playerInfo.player[p].county > 8) {
    //move up
    playerInfo.player[p].county = 0
    playerInfo.player[p].countx = 0
    playerInfo.player[p].changeDir(0, -1)
  } else if (e.keyCode == playerInfo.down[p] && playerInfo.player[p].yDir != -1 && playerInfo.player[p].county > 8) {
    // move down
    playerInfo.player[p].county = 0
    playerInfo.player[p].countx = 0
    playerInfo.player[p].changeDir(0, 1)
  };

  
  
};


function removePlayerValues(context, riderArray) {
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

 //Rfor(var i = 0; i < riderTwoArray.length - 1 ; i++) {
  if(riderOneArray[riderOneArray.length - 1].x === riderOneArray[i].x &&
    riderOneArray[riderOneArray.length - 1].y === riderOneArray[i].y) {
      alert('Game OVER')
    }
 }

//Rider Two Self Collision
 for(var i = 0; i < riderTwoArray.length - 1 ; i++) {
  if(riderTwoArray[riderTwoArray.length - 1].x === riderTwoArray[i].x &&
   riderTwoArray[riderTwoArray.length - 1].y === riderTwoArray[i].y) {
     alert('Game OVER')
   }
}
      

 