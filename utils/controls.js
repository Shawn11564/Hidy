class Controls {
  constructor() {}
  show() {
    stroke(255, 100);
    strokeWeight(2);
    fill(200, 75);
    rect(87.5, dispY - 150, 25, 100);
    rect(50, dispY - 112.5, 100, 25);
  }
  moveHider(x, y) {
    if (x > 87.5 && x < 112.5 && y < dispY - 112.5 && y > dispY - 150) {
      hider.moveUp();
    } else if (x > 87.5 && x < 112.5 && y < dispY - 50 && y > dispY - 87.5) {
      hider.moveDown();
    } else if (x > 50 && x < 87.5 && y < dispY - 87.5 && y > dispY - 112.5) {
      hider.moveLeft();
    } else if (x > 112.5 && x < 150 && y < dispY - 87.5 && y > dispY - 112.5) {
      hider.moveRight();
    } else {
      hider.idle();
    }
  }
  moveFinder(a, b) {
    if (a > 87.5 && a < 112.5 && b < dispY - 112.5 && b > dispY - 150) {
      finder.moveUp();
    } else if (a > 87.5 && a < 112.5 && b < dispY - 50 && b > dispY - 87.5) {
      finder.moveDown();
    } else if (a > 50 && a < 87.5 && b < dispY - 87.5 && b > dispY - 112.5) {
      finder.moveLeft();
    } else if (a > 112.5 && a < 150 && b < dispY - 87.5 && b > dispY - 112.5) {
      finder.moveRight();
    } else {
      finder.idle();
    }
  }
}