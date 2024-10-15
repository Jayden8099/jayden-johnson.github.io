// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCircles();
}



function drawCircles() {
  fill(0);

  for (let x = 0; x < width; x += 40) {

    circle(x, 0, 20);
    line(x, 0, mouseX, mouseY);
  }
  for (let y = 0; y < height; y += 40) {

    circle(width, y, 20);
    line(width, y, mouseX, mouseY);
  }
  for (let x = width; x > 0; x -= 40) {

    circle(x, height, 20);
    line(x, height, mouseX, mouseY);
  }
  for (let y = height; y > 0; y -= 40) {

    circle(0, y, 20);
    line(0, y, mouseX, mouseY);
  }
}