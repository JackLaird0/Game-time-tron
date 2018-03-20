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
    if(this.playerOneArray.length === 1000) {
      this.context.clearRect(this.playerOneArray[0].x, this.playerOneArray[0].y, 8, 8);
      this.playerOneArray.shift();
    }
    if(this.playerTwoArray.length === 1000) {
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
// console.log(this.playerOne.x)
    if (this.playerOne.x <= -8 || this.playerOne.x >= 808 || this.playerOne.y <= -8 || this.playerOne.y >= 608) {
      alert('Player Two Wins');
    }

    if (this.playerTwo.x <= -8 || this.playerTwo.x >= 808 || this.playerTwo.y <= -8 || this.playerTwo.y >= 608) {
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
    //Rider One Self Collision
    for (var i = 0; i < this.playerOneArray.length - 20; i++) {
      let head = this.playerOneArray[this.playerOneArray.length -1];
      if (this.playerOneArray[i].x + 7 > head.x && head.x > this.playerOneArray[i].x - 7 &&
        this.playerOneArray[i].y + 7 > head.y && head.y > this.playerOneArray[i].y - 7){
          alert('Player Two Wins')
      }
    }

    //Rider Two Self Collision
    for (var i = 0; i < this.playerTwoArray.length - 20; i++) {
      let head = this.playerTwoArray[this.playerTwoArray.length - 1];
      if (this.playerTwoArray[i].x + 7 > head.x && head.x > this.playerTwoArray[i].x - 7 &&
        this.playerTwoArray[i].y + 7 > head.y && head.y > this.playerTwoArray[i].y - 7) {
        alert('Player Two Wins')
      }  
    }

  }
  
  }
module.exports = Game;