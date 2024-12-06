// Multiple files and Inheritance
// Jayden Johnson
// 12/6/2024


let objects = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 10; i > 0; i--) {
    objects.push(new AnimatedObject(random(width), 400));
    objects.push(new CircleObject());
    objects.push(new LineObject());
  }
}

function draw() {
  background(220);
  for (let o of objects) {
    o.move();
    o.display();
  }
}
