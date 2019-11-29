class ARList {
  constructor(x, y, w, oh, elements, size, r, g, b, or, og, ob) {
    this.x = x - (w / 2);
    this.y = y;
    this.w = w;
    this.oh = oh;
    this.elements = elements;
    this.buttons = [];
    this.size = size;
    this.r = r;
    this.g = g;
    this.b = b;
    this.or = or;
    this.og = og;
    this.ob = ob;
  }
  
  show() {
    textSize(this.size);
    fill(this.r, this.g, this.b);
    this.make();
  }
  
  make() {
    this.buttons = [];
    for (var i = 0; i < this.elements.length; i++) {
      this.buttons.push(new Button(this.x + (this.w / 2), this.y + (this.oh * i), this.w, this.oh, this.elements[i], this.size, this.r, this.g, this.b, this.or, this.og, this.ob));
      this.buttons[i].show();
    }
  }
  
  clicked() {
    for (var i = 0; i < this.buttons.length; i++) {
      if (this.buttons[i].clicked()) {
        return this.buttons[i];
      }
    }
  }
  
}