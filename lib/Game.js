const Rider = require('./Rider');

class Game {
  constructor(context) {
    this.playerOne = new Rider(92, 296, 8, 8, '#b126f7', 1);
    this.playerTwo = new Rider(692, 296, 8, 8, '#f5ff33', -1);
    this.context = context;
    this.playerOneArray = [];
    this.playerTwoArray = [];
  }

  segmentCoordinates() {
    let playerOneCoordinates = {
      x: this.playerOne.x,
      y: this.playerOne.y,
    }
    let playerTwoCoordinates = {
      x: this.playerTwo.x,
      y: this.playerTwo.y,
    }

    return {playerOneCoordinates, playerTwoCoordinates}
  }

  maxLength(context) {
    if(this.playerOneArray.length === 100) {
      this.context.clearRect(this.playerOneArray[0].x, this.playerOneArray[0].y, 8, 8);
      this.playerOneArray.shift();
    }
    if(this.playerTwoArray.length === 100) {
      this.context.clearRect(this.playerTwoArray[0].x, this.playerTwoArray[0].y, 8, 8);
      this.playerTwoArray.shift();
    }
  }

  gameLoop() {
    this.playerOne.draw(this.context);
    this.playerTwo.draw(this.context);
    requestAnimationFrame(this.gameLoop.bind(this));
    this.playerOneArray.push(this.segmentCoordinates().playerOneCoordinates);
    this.playerTwoArray.push(this.segmentCoordinates().playerTwoCoordinates);
    this.maxLength(this.context);
    this.gameOver();
    // debugger;
  }

  gameOver() {
    //Wall Collision
    if (this.playerOne.x === 0 || this.playerOne.x === 800 || this.playerOne.y === 0 || this.playerOne.y === 600) {
      alert('Player Two Wins');
    }

    if (this.playerTwo.x === 0 || this.playerTwo.x === 800 || this.playerTwo.y === 0 || this.playerTwo.y === 600) {
      alert('Player One Wins')
    }
    
    //Player to Player Collision
    for (var i = 0; i < this.playerOneArray.length; i++) {
      for (var j = 0; j < this.playerTwoArray.length; j++) {
        if (this.playerOneArray[i].x - 6 <= this.playerTwoArray[j].x && this.playerTwoArray[j].x <= this.playerOneArray[i].x + 6 &&
          this.playerOneArray[i].y - 6 <= this.playerTwoArray[j].y && this.playerTwoArray[j].y <= this.playerOneArray[i].y + 6) {
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
  }

}

module.exports = Game;