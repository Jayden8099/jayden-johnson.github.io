// Cars Cars Cars
// Jayden Johnson
// 10/18/2024

//Arrays that contain all the vehicles
let eastbound = [];
let westbound = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  //Pushes 20 new Vehicles to each Array at a random X and Y based on direction
  //Aswell as a random vehicle type
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle(random(0, width), random(height / 2 + 30, height / 2 + 200), round(random(0, 1)), 0));
    westbound.push(new Vehicle(random(0, width), random(height / 2 - 30, height / 2 - 200), round(random(0, 1)), 1));
  }
  trafficL = new trafficLight(0);
}

function draw() {

  background(220);
  drawRoad();
  trafficL.display();

  for (let i = 0; i < eastbound.length; i++) {
    eastbound[i].action();
  }
  for (let i = 0; i < westbound.length; i++) {
    westbound[i].action();
  }
}
function mouseClicked() {
  //If shift left clicking  push a new Vehicle to westbound
  if (keyIsPressed && keyCode === SHIFT) {
    westbound.push(new Vehicle(random(0, width), random(height / 2 - 30, height / 2 - 200), round(random(0, 1)), 1));

  }
  //If Left clicking push a new vehicle to eastbound
  else {
    eastbound.push(new Vehicle(random(0, width), random(height / 2 + 30, height / 2 + 200), round(random(0, 1)), 0));
  }
}
function keyPressed() {
  if (keyCode === 32) {
    trafficL.update();
  }
}



function drawRoad() {
  // Draws the Road
  fill(0);
  rect(0, height / 2, width * 2, 500);

  //Draws the White Dividing Lines
  for (let i = 0; i < width; i += 20) {
    stroke('white');
    strokeWeight(2);
    line(i, height / 2, i += 20, height / 2);
  }
}

class Vehicle {
  constructor(x, y, type, direction) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.color = color(random(255), random(255), random(255));
    this.direction = direction;
    this.xSpeed = 5;
    this.MAX_SPEED = 15;
    this.rng;
  }
  display() {
    if (this.type === 0) {
      fill(this.color);
      rect(this.x, this.y, 75, 40);
    }
    else {
      fill(this.color);
      rect(this.x, this.y, 25);
    }
  }

  move() {
    if (this.direction === 0) {
      this.x += this.xSpeed;

      if (this.x >= width + 100) {
        this.x -= width + 100;
      }
    }

    else {
      this.x -= this.xSpeed;

      if (this.x <= 0 - 100) {
        this.x += width + 100;
      }

    }
  }


  speedUp() {
    //Left Moving Traffic 
    if (this.direction === 0) {
      this.xSpeed += 1;
      if (this.xSpeed >= this.MAX_SPEED) {
        this.xSpeed = this.MAX_SPEED;
      }
    }

    //Right Moving Traffic
    else {
      this.xSpeed += 1;
      if (-this.xSpeed <= -this.MAX_SPEED) {
        this.xSpeed = -this.MAX_SPEED;
      }
      else if (-this.xSpeed >= 0) {
        this.xSpeed = 0;
      }
    }
  }



  speedDown() {
    //Left Moving Traffic
    if (this.direction === 0) {
      this.xSpeed -= 1;
      if (this.xSpeed <= 0) {
        this.xSpeed = 1;
      }
    }
    //Right Moving Traffic
    else {
      this.xSpeed -= 1;
      if (this.xSpeed <= 0) {
        this.xSpeed = 1;
      }
    }
  }
  action() {
    this.move();
    this.display();

    this.rng = round(random(1, 100));

    if (this.rng === 1) {
      this.speedUp();
      //print(this.xSpeed);

    }
    else if (this.rng === 2) {
      this.speedDown();
      //print(this.xSpeed);

    }
    else if (this.rng === 3) {
      this.color = color(random(255), random(255), random(255));
    }
  }
}
class trafficLight {
  constructor(state) {
    this.state = state;
    this.interval = 2000;
    this.prevTime;
    this.check;
  }
  display() {
    fill(0);
    rect(80, 80, 100, 200);
    if (this.state === 0) {
      fill(0, 255, 0);
      circle(80, 50, 60);
    }
    else {
      fill(255, 0, 0);
      circle(80, 120, 60);
    }
  }
  update() {
    this.prevTime = millis();
    
    this.state = 1;
    
    this.check = this.prevTime + this.interval;

    print(this.state);
    if (millis() > this.check) {
      this.state = 0;
      print(this.state);
    }
  }

}


