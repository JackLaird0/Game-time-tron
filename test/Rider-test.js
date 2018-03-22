const chai = require('chai');
const assert = chai.assert;
const Rider = require('../lib/Rider');

describe('Rider', function() {
  it('should be a function', function() {
    assert.isFunction(Rider);
  });

  it('should instantiate our good friend Rider', function() {
    var rider = new Rider();
    assert.isObject(rider);
  });

  it('should have an x coordinate', function() {
    var rider = new Rider(10);
    assert.equal(rider.x, 10);
  })

  it('should have an y coordinate', function() {
    var rider = new Rider(10, 12);
    assert.equal(rider.y, 12);
  })

  it('should have a width', function () {
    var rider = new Rider(10, 12, 8);
    assert.equal(rider.width, 8);
  })

  it('should have a height', function () {
    var rider = new Rider(10, 12, 8, 8);
    assert.equal(rider.height, 8);
  })

  it('should have a color', function () {
    var rider = new Rider(10, 12, 8, 8, 'red');
    assert.equal(rider.color, 'red');
  })
  
  it('should have an x direction', function() {
    var rider = new Rider(10, 12, 8, 8, 'red', 1);
    assert.equal(rider.xDir, 1)
  })

  //Move Method

  it('should be able to move on the x-axis', function() {
    var rider = new Rider(10, 12, 8, 8, 'red', 1)

    rider.move();

    assert.equal(rider.x, 11);
  })

  it('should be able to move on the y-axis', function() {
    var rider = new Rider(10, 12, 8, 8, 'red', 1)

    rider.yDir = 1;

    rider.move();

    assert.equal(rider.y, 13);
  })

  //Change Direction Method

  it('should be able to change it\'s x direction', function() {
    var rider = new Rider(10, 12, 8, 8, 'red', 1)

    assert.equal(rider.xDir, 1);

    rider.changeDir(0, 1);

    assert.equal(rider.xDir, 0);
  }) 

  it('should be able to change it\'s y direction', function () {
    var rider = new Rider(10, 12, 8, 8, 'red', 1)

    assert.equal(rider.yDir, 0);

    rider.changeDir(0, 1);

    assert.equal(rider.yDir, 1);
  }) 

})
