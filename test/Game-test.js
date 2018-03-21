const chai = require('chai');
const assert = chai.assert;
const Game = require('../lib/Game');
const Rider = require('../lib/Rider');

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

  //Segment Coordinates Method

  it('when called, should return an object', function() {
    var game = new Game();
    
    let coordinatesObject = game.segmentCoordinates();

    assert.isObject(coordinatesObject);
  })

  it('should return an object with two players inside', function() {
    var game = new Game();

    let coordinatesObject = game.segmentCoordinates();

    assert.equal(Object.keys(coordinatesObject).length, 2);
  })

  it('player one should have an x key', function() {
    var game = new Game();

    let coordinatesObject = game.segmentCoordinates();

    let objectKeys = Object.keys(coordinatesObject)

    let playerOneCoordinates = (coordinatesObject.playerOneCoordinates)
    assert.equal(playerOneCoordinates.x, 92)
    
  })

  it('player one should have an y key', function() {
    var game = new Game();

    let coordinatesObject = game.segmentCoordinates();

    let objectKeys = Object.keys(coordinatesObject)

    let playerOneCoordinates = (coordinatesObject.playerOneCoordinates)

    assert.equal(playerOneCoordinates.y, 296)
    
  })
  
})
  it('player two should have an x key', function() {
    var game = new Game();

    let coordinatesObject = game.segmentCoordinates();

    let objectKeys = Object.keys(coordinatesObject)

    let playerTwoCoordinates = (coordinatesObject.playerTwoCoordinates)

    assert.equal(playerTwoCoordinates.x, 692)
    
  })
  
  it('player two should have an y key', function() {
    var game = new Game();

    let coordinatesObject = game.segmentCoordinates();

    let objectKeys = Object.keys(coordinatesObject)

    let playerTwoCoordinates = (coordinatesObject.playerTwoCoordinates)

    assert.equal(playerTwoCoordinates.y, 296)
    
  })
  