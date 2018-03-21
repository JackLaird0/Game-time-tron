const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/Game');
const Rider = require('../lib/Rider');
// const context = canvas.getContext('2d');

describe('Game Tests', function() {

  it('should be a function', function() {
    assert.isFunction(Game);
  });

  it('should instantiate our good friend Game', function() {
    var game = new Game();
    assert.isObject(game);
  });

  it('should have a player one', function() {
    var game = new Game();
    assert.instanceOf(game.playerOne, Rider);
  })

  it('should have a player two', function () {
    var game = new Game();
    assert.instanceOf(game.playerTwo, Rider);
  })

  it('should have a player one array', function() {
    var game = new Game();
    assert.deepEqual(game.playerOneArray, []);
  })

  it('should have a player two array', function() {
    var game = new Game();
    assert.deepEqual(game.playerTwoArray, []);
  })

  it('should have an inital game state of start', function() {
    var game = new Game();
    assert.equal(game.gameState, 'start');
  })
  
})