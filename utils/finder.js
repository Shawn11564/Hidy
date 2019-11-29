class Finder {
  constructor() {
    this.x = 200; this.y = 200; this.size =100; this.speed = 2;
    this.ax = this.x; this.ay = this.y;
    this.bx = this.x + this.size; this.by = this.y - this.size;
    this.cx = this.x + this.size; this.cy = this.y + this.size;
    this.dx = this.x + this.size; this.dy = this.y; this.dX = this.size / 2; this.dY = this.size * 2;
  }
  show() {
    //flashlight
    noStroke();
    fill(175);
    ellipseMode(CENTER);
    ellipse(this.dx, this.dy, this.dX, this.dY);
    triangle(this.ax, this.ay, this.bx, this.by, this.cx, this.cy);
    // 
  }
  moveUp() {
    this.y -= this.speed;
    
    this.ax = this.x; this.ay = this.y;
    this.bx = this.x - this.size; this.by = this.y - this.size;
    this.cx = this.x + this.size; this.cy = this.y - this.size;
    this.dx = this.x; this.dy = this.y - 100; this.dX = this.size * 2; this.dY = this.size / 2;
  }
  moveDown() {
    this.y += this.speed;
    
    this.ax = this.x; this.ay = this.y;
    this.bx = this.x + this.size; this.by = this.y + this.size;
    this.cx = this.x - this.size; this.cy = this.y + this.size;
    this.dx = this.x; this.dy = this.y + this.size; this.dX = this.size * 2; this.dY = this.size / 2;
  }
  moveLeft() {
    this.x -= this.speed;
    
    this.ax = this.x; this.ay = this.y;
    this.bx = this.x - this.size; this.by = this.y - this.size;
    this.cx = this.x - this.size; this.cy = this.y + this.size;
    this.dx = this.x - this.size; this.dy = this.y; this.dX = this.size / 2; this.dY = this.size * 2;
  }
  moveRight() {
    this.x += this.speed;
    
    this.ax = this.x; this.ay = this.y;
    this.bx = this.x + this.size; this.by = this.y - this.size;
    this.cx = this.x + this.size; this.cy = this.y + this.size;
    this.dx = this.x + this.size; this.dy = this.y; this.dX = this.size / 2; this.dY = this.size * 2;
  }
  idle() {}
}