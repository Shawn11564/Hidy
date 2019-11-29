class Label {
  constructor(text, x, y, fSize, r, g, b) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.fSize = fSize;
    this.r = r;
    this.g = g;
    this.b = b;
  }
  
  show() {
    textSize(this.fSize);
    fill(this.r, this.g, this.b);
    text(this.text, this.x, this.y)
  }
}