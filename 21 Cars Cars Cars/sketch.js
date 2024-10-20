// Cars Cars Cars
// Jayden Johnson
// 10/18/2024



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  drawRoad();
  
}


function drawRoad() {
  // Draws the Road
  fill(0);
  rect(0, height / 2 - 250, width, 500);

  //Draws the White Dividing Lines
  for (let i = 0; i < width; i += 20) {
    stroke('white');
    strokeWeight(5);
    line(i, height / 2, i += 20, height / 2);
  }







}

class Vehicle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.type = random(0, 1);
    this.color = color(random(255), random(255), random(255));;
    this.direction = random(0, 1);
    this.xSpeed = 5;
    this.MAX_SPEED = 15;
  }
  display() {
    if (this.type === 0) {
      fill(this.color);
      rect(this.x, this.y, 100, 50);
    }
    else {
      fill(this.color);
      rect(this.x, this.y, 100);
    }
  }

  move() {
    if (this.direction === 0) {
      this.x += this.xSpeed;
    }
    else {
      this.x += -this.xSpeed
    }
  }


  speedUp() {
    if (this.direction === 0) {
      this.xSpeed + 1;
      if (this.xSpeed >= this.MAX_SPEED) {
        this.xSpeed = this.MAX_SPEED;
      }
    }
    else {
      -this.xSpeed - 1;
      if (-this.xSpeed <= -this.MAX_SPEED) {
        this.xSpeed = -this.MAX_SPEED;
      }
    }
  }
}