class Block {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height
  }
  draw(context) {
    context.fillRect(this.x, this.y, this.width, this.height)
    console.log('we are drawing self')
  }

  move() {
    this.x++;
    this.y++
    return this
  }
}

module.exports = Block;