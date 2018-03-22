class Rider {
  constructor(x, y, width, height, color, xDir) {
    this.x = x;
    this.y = y;
    this.xDir = xDir;
    this.yDir = 0;
    this.width = width;
    this.height = height;
    this.color = color;
    this.multiplier = 1
  };

  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    this.move()
  };

  move() {
    this.x += (this.xDir * this.multiplier);
    this.y += (this.yDir * this.multiplier);
  };

  changeDir(x, y) {
    this.xDir = x;
    this.yDir = y;
  };
}

module.exports = Rider;