//Child Class 2

class LineObject extends AnimatedObject {
  constructor() {
    super(random(width), random(height));
  }

  move() {   //override but build on top of parent version
    super.move();
    this.x -= 5;
    if (this.x < 0) {
      this.x = width;
    }
  }
  display() {
    if (mouseIsPressed) {
      strokeWeight(10);
    }
    else {
      strokeWeight(2);
    }
    line(this.x, this.y, this.x + 45, this.y);
  }
}
