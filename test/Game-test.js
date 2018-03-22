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

})

describe('Segment Coordinates Method', function(){

  it('when called, should return an object', function () {
    var game = new Game();

    let coordinatesObject = game.segmentCoordinates();

    assert.isObject(coordinatesObject);
  })

  it('should return an object with two players inside', function () {
    var game = new Game();

    let coordinatesObject = game.segmentCoordinates();

    assert.equal(Object.keys(coordinatesObject).length, 2);
  })

  it('player one should have an x key', function () {
    var game = new Game();

    let coordinatesObject = game.segmentCoordinates();

    let objectKeys = Object.keys(coordinatesObject)

    let playerOneCoordinates = (coordinatesObject.playerOneCoordinates)
    assert.equal(playerOneCoordinates.x, 92)

  })

  it('player one should have an y key', function () {
    var game = new Game();

    let coordinatesObject = game.segmentCoordinates();

    let objectKeys = Object.keys(coordinatesObject)

    let playerOneCoordinates = (coordinatesObject.playerOneCoordinates)

    assert.equal(playerOneCoordinates.y, 296)

  })

  it('player two should have an x key', function () {
    var game = new Game();

    let coordinatesObject = game.segmentCoordinates();

    let objectKeys = Object.keys(coordinatesObject)

    let playerTwoCoordinates = (coordinatesObject.playerTwoCoordinates)

    assert.equal(playerTwoCoordinates.x, 692)

  })

  it('player two should have an y key', function () {
    var game = new Game();

    let coordinatesObject = game.segmentCoordinates();

    let objectKeys = Object.keys(coordinatesObject)

    let playerTwoCoordinates = (coordinatesObject.playerTwoCoordinates)

    assert.equal(playerTwoCoordinates.y, 296)

  })

})

describe('Game Over Method', function() {

  describe('Wall Collision', function() {

    it('game over should be a function', function () {
      var game = new Game();
      assert.isFunction(game.gameOver)
    })

    it('should check for player one top wall collision', function () {
      var game = new Game();

      game.playerOne.y = -9;

      game.gameOver();

      assert.equal(game.gameState, 'Player Two Wins')
    })

    it('should check for player one bottom wall collision', function () {
      var game = new Game();

      game.playerOne.y = 609;

      game.gameOver();

      assert.equal(game.gameState, 'Player Two Wins')
    })

    it('should check for player one left wall collision', function () {
      var game = new Game();

      game.playerOne.x = -9;

      game.gameOver();

      assert.equal(game.gameState, 'Player Two Wins')
    })

    it('should check for player one right wall collision', function () {
      var game = new Game();

      game.playerOne.x = 809;

      game.gameOver();

      assert.equal(game.gameState, 'Player Two Wins')
    })

    it('should check for player two top wall collision', function () {
      var game = new Game();

      game.playerTwo.y = -9;

      game.gameOver();

      assert.equal(game.gameState, 'Player One Wins')
    })

    it('should check for player two bottom wall collision', function () {
      var game = new Game();

      game.playerTwo.y = 609;

      game.gameOver();

      assert.equal(game.gameState, 'Player One Wins')
    })

    it('should check for player two left wall collision', function () {
      var game = new Game();

      game.playerTwo.x = -9;

      game.gameOver();

      assert.equal(game.gameState, 'Player One Wins')
    })

    it('should check for player two right wall collision', function () {
      var game = new Game();

      game.playerTwo.x = 809;

      game.gameOver();

      assert.equal(game.gameState, 'Player One Wins')
    })
  })

  describe('Player to Player Collision', function() {

    //Mock an array.
    //Run gameOver method
    //Assert that the correct player wins
    
    it('player one wins if player two hits player one', function() {
      var game = new Game();

      game.playerOneArray = [
        {x: 32, y: 400},
        {x: 47, y: 400},
        {x: 109, y: 400}
      ]
      game.playerTwoArray = [
        {x: 0, y: 0},
        {x: 165, y: 280},
        {x: 47, y: 400}
      ]

      game.gameOver();

      assert.equal(game.gameState, 'Player One Wins');
    })

    it('player two wins if player one hits player two', function() {
      var game = new Game();

      game.playerTwoArray = [
        {x: 32, y: 400},
        {x: 47, y: 400},
        {x: 109, y: 400}
      ]
      game.playerOneArray = [
        {x: 0, y: 0},
        {x: 165, y: 280},
        {x: 47, y: 400}
      ]

      game.gameOver();

      assert.equal(game.gameState, 'Player Two Wins');
    })

    it('should be a tie if they collide head on', function() {
      var game = new Game();

      game.playerTwoArray = [
        {x: 32, y: 400},
        {x: 109, y: 400},
        {x: 47, y: 400}
      ]
      game.playerOneArray = [
        {x: 0, y: 0},
        {x: 165, y: 280},
        {x: 47, y: 400}
      ]

      game.gameOver();

      assert.equal(game.gameState, 'tied');
    })
  })

  describe('Player One Self Collision', function() {
    it('player two should win if player one collides with itself', function() {
      var game = new Game();

      game.playerOneArray = [
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 },
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 },
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 },
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 },
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 },
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 },
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 },
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 }
      ]

      game.gameOver();

      assert.equal(game.gameState, 'Player Two Wins')
    })

    it('player one should win if player two collides with itself', function() {
      var game = new Game();

      game.playerTwoArray = [
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 },
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 },
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 },
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 },
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 },
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 },
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 },
        { x: 32, y: 400 },
        { x: 47, y: 400 },
        { x: 32, y: 400 }
      ]

      game.gameOver();

      assert.equal(game.gameState, 'Player One Wins')
    })
  })

  describe('Player Two Self Collision', function() {

  })

})

  

 
  

