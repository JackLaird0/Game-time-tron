const chai = require('chai');
const assert = chai.assert;
const Rider = require('../lib/Rider');
const context = canvas.getContext('2d');

describe(Rider, function() {
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

  it('should exist on the canvas when drawn', function() {
    var rider = new Rider(10, 12, 8, 8, 'red', 1);

    rider.draw(context);

    assert.equal()
  })

})
