class Rider {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.xDir = 1;
    this.yDir = 0;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height)
    this.move()
  }

  move() {
    this.x += this.xDir;
    this.y += this.yDir;
  }

  changeDir(x, y) {
    this.xDir = x;
    this.yDir = y;
  }
}

module.exports = Rider;