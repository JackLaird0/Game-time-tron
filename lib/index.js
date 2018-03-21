var Game = require('./Game')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


document.addEventListener('keydown', event => keydownHandler(event, 'p1'))
document.addEventListener('keydown', event => keydownHandler(event, 'p2'))
document.addEventListener('keyup', event => keyupHandler(event, 'p1'))
document.addEventListener('keyup', event => keyupHandler(event, 'p2'))
document.addEventListener('keyup', event => pauseGame(event))

var game = new Game(context);

game.gameLoop();


function keydownHandler(e, p) {
  e.preventDefault(); 

  const playerInfo = {
    player: {p1: game.playerOne, p2: game.playerTwo},
    left:   {p1: 65, p2: 37},
    right:  {p1: 68, p2: 39},
    up:     {p1: 87, p2: 38},
    down:   {p1: 83, p2: 40},
    boost:  {p1: 81, p2: 191}
  };

  if (e.keyCode === playerInfo.left[p] && playerInfo.player[p].xDir != 1) {
    //move left
    playerInfo.player[p].changeDir(-1, 0)
  } else if (e.keyCode === playerInfo.right[p] && playerInfo.player[p].xDir != -1) {
    // move right
    playerInfo.player[p].changeDir(1, 0)
  } else if (e.keyCode === playerInfo.up[p] && playerInfo.player[p].yDir != 1) {
    //move up
    playerInfo.player[p].changeDir(0, -1)
  } else if (e.keyCode === playerInfo.down[p] && playerInfo.player[p].yDir != -1) {
    // move down
    playerInfo.player[p].changeDir(0, 1)
  };

  if (e.keyCode === playerInfo.boost[p] && playerInfo.player[p].multiplier === 1) {
    playerInfo.player[p].multiplier = 2;
  }
};

function keyupHandler(e, p) {
  const playerInfo = {
    player: {p1: game.playerOne, p2: game.playerTwo},
    boost:  {p1: 81, p2: 191}
  };
  if (e.keyCode === playerInfo.boost[p]) {
    playerInfo.player[p].multiplier = 1;
  }
}

function pauseGame(e) {
  if (e.keyCode === 32) {
    if (game.gameState === 'paused') {
    game.gameState = 'playing';
    } else {
      game.gameState = 'paused'
    }

  }
}


      

 