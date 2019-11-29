class Button {
  constructor(x, y, w, h, text, size, r, g, b, or, og, ob) {
    this.x = x - (w / 2);
    this.y = y - (h / 2);
    this.w = w;
    this.h = h;
    this.text = text;
    this.size = size;
    this.r = r;
    this.g = g;
    this.b = b;
    this.or = or;
    this.og = og;
    this.ob = ob;
  }
  
  show() {
    rectMode(CORNER);
    textAlign(CENTER, CENTER);
    textSize(this.size);
    fill(this.r, this.g, this.b);
    stroke(this.or, this.og, this.ob);
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    text(this.text, this.x + (this.w / 2), this.y + (this.h / 2));
  }
  
  clicked() {
    return collidePointRect(mouseX, mouseY, this.x, this.y, this.w, this.h);
  }
  
  getText() {
    return this.text;
  }
}