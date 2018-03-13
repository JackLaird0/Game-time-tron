var Block = require('./Block.js')
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.fillStyle = 'red'

var firstBlock = new Block(50, 50, 10, 10);
var secondBlock = new Block(75, 75, 10, 10);
var arrayOfBlox = [firstBlock, secondBlock]
firstBlock.draw(context)



function cats() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  arrayOfBlox.forEach(function(block) {
    block.move().draw(context)
  })
  // firstBlock.draw(context)
  requestAnimationFrame(cats)
}

window.requestAnimationFrame(cats)