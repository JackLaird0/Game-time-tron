const Rider = require('./Rider');

class Game {
  constructor(context) {
    this.playerOne = new Rider(92, 296, 8, 8, '#b126f7', 1);
    this.playerTwo = new Rider(692, 296, 8, 8, '#f5ff33', -1);
    this.context = context;
    this.playerOneArray = [];
    this.playerTwoArray = [];
    this.gameState = 'start';
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
    if (this.playerOneArray.length === 2000) {
      this.context.clearRect(this.playerOneArray[0].x, this.playerOneArray[0].y, 8, 8);
      this.playerOneArray.shift();
    }
    if (this.playerTwoArray.length === 2000) {
      this.context.clearRect(this.playerTwoArray[0].x, this.playerTwoArray[0].y, 8, 8);
      this.playerTwoArray.shift();
    }
  }

  gameLoop() {
    if (this.gameState === 'playing') {
      this.playerOne.draw(this.context);
      this.playerTwo.draw(this.context);
      this.playerOneArray.push(this.segmentCoordinates().playerOneCoordinates);
      this.playerTwoArray.push(this.segmentCoordinates().playerTwoCoordinates);
      this.maxLength(this.context);
      this.gameOver();
    } 
    requestAnimationFrame(this.gameLoop.bind(this));
  }

  gameOver() {
    //Wall Collision
    if (this.playerOne.x <= -8 || this.playerOne.x >= 798 || this.playerOne.y <= 0 || this.playerOne.y >= 608) {
      this.gameState = 'Player Two Wins';
    }

    if (this.playerTwo.x <= -8 || this.playerTwo.x >= 798 || this.playerTwo.y <= 0 || this.playerTwo.y >= 608) {
      this.gameState = 'Player One Wins'
    }
    
    //Player to Player Collision
    for (var i = 0; i < this.playerOneArray.length; i++) {
      for (var j = 0; j < this.playerTwoArray.length; j++) {
        if (this.playerOneArray[i].x - 6 <= this.playerTwoArray[j].x && this.playerTwoArray[j].x <= this.playerOneArray[i].x + 6 &&
          this.playerOneArray[i].y - 6 <= this.playerTwoArray[j].y && this.playerTwoArray[j].y <= this.playerOneArray[i].y + 6) {
          if (i < j) {
            this.gameState = 'Player One Wins'
          } else if (i > j) {
            this.gameState = 'Player Two Wins'
          } else {
            this.gameState = "tied"
          }
        }
      }
    }
    //Rider One Self Collision
    for (var i = 0; i < this.playerOneArray.length - 20; i++) {
      let head = this.playerOneArray[this.playerOneArray.length - 1];

      if (this.playerOneArray[i].x + 7 > head.x && head.x > this.playerOneArray[i].x - 7 &&
        this.playerOneArray[i].y + 7 > head.y && head.y > this.playerOneArray[i].y - 7) {
        this.gameState = 'Player Two Wins'
      }
    }
    //Rider Two Self Collision
    for (var i = 0; i < this.playerTwoArray.length - 20; i++) {
      let head = this.playerTwoArray[this.playerTwoArray.length - 1];

      if (this.playerTwoArray[i].x + 7 > head.x && head.x > this.playerTwoArray[i].x - 7 &&
        this.playerTwoArray[i].y + 7 > head.y && head.y > this.playerTwoArray[i].y - 7) {
        this.gameState = 'Player One Wins'
      }  
    }
  }
  
}

module.exports = Game;