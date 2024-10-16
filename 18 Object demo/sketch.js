// Project Title
// Your Name
// Date


const SEGMENT_REACH = 250;
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}



function draw() {
  background(220);
  for (let i = 0; i < points.length; i++) {
    points[i].move();
    points[i].connectPoints(points);
    points[i].display();
  }
}


function mouseClicked() {
  points.push(new MiniPoint(mouseX, mouseY));
}











class MiniPoint {



  constructor(xPos, yPos) {
    this.x = xPos;
    this.y = yPos;
    this.s = 20;
    this.c = color(random(255), random(255), random(255));
    this.noiseX = random(10);
    this.noiseY = random(10);
    this.OFFSET = 0.01;
    this.MAX_SPEED = 5;
  }
  display() {
    fill(this.c);
    noStroke();
    ellipse(this.x, this.y, this.s, this.s);
  }

  connectPoints(pointArray) {

    for (let i = 0; i < pointArray.length; i++) {
      
      //this.x   this.y  pointArray[i].x  pointArray[i].y
      stroke(this.c);
      if (this !== pointArray[i]) {
        if (dist(this.x, this.y, pointArray[i].getX(), pointArray[i].getY()) < SEGMENT_REACH) {
          line(this.x, this.y, pointArray[i].getX(), pointArray[i].getY());
        }
      }

    }

  }

  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }








  move() {
    let xSpeed = map(noise(this.noiseX), 0, 1, -this.MAX_SPEED, this.MAX_SPEED);
    let ySpeed = map(noise(this.noiseY), 0, 1, -this.MAX_SPEED, this.MAX_SPEED);
    this.x += xSpeed;
    this.y += ySpeed;
    this.noiseX += this.OFFSET;
    this.noiseY += this.OFFSET;


    //wrap around code
    if (this.x < 0) {
      this.x += width;
    }
    if (this.x > width) {
      this.x -= width;
    }
    if (this.y < 0) {
      this.y += height;
    }
    if (this.y > height) {
      this.y -= height;
    }
  }



}