const Rider = require('./Rider');

class Game {
  constructor(context) {
    this.playerOne = new Rider(92, 296, 8, 8, '#b126f7', 1);
    this.playerTwo = new Rider(692, 296, 8, 8, '#f5ff33', -1);
    this.context = context;
  }

  gameLoop() {
    this.playerOne.draw(this.context);
    this.playerTwo.draw(this.context);
    requestAnimationFrame(this.gameLoop.bind(this));
  }

}

module.exports = Game;