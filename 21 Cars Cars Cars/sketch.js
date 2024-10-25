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
    //                            random x           random y within their lanes               random type       direction
    eastbound.push(new Vehicle(random(0, width), random(height / 2 + 30, height / 2 + 200), round(random(0, 1)), 0));
    westbound.push(new Vehicle(random(0, width), random(height / 2 - 30, height / 2 - 200), round(random(0, 1)), 1));
  }
}

function draw() {

  background(220);
  drawRoad();

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
    //Car (Small Square)
    if (this.type === 0) {
      fill(this.color);
      rect(this.x, this.y, 75, 40);
    }
    //Truck (Rectangle)
    else {
      fill(this.color);
      rect(this.x, this.y, 25);
    }
  }

  move() {
    // if the direction = east
    //this.x changes by this.xSpeed
    if (this.direction === 0) {
      this.x += this.xSpeed;

      //wrap around code
      if (this.x >= width + 100) {
        this.x -= width + 100;
      }
    }
    // if the direction = west
    //this.x changes by -xSpeed
    else {
      this.x -= this.xSpeed;

      //wrap around code
      if (this.x <= 0 - 100) {
        this.x += width + 100;
      }

    }
  }


  speedUp() {
    //Speeds up the traffic
    this.xSpeed += 1;
    
    //make sure it stays below or at the max speed
    if (this.xSpeed >= this.MAX_SPEED) {
      this.xSpeed = this.MAX_SPEED;
    }
  }



  speedDown() {
    //slows down the traffic
    this.xSpeed -= 1;

    //make sure it stays above 0
    if (this.xSpeed <= 0) {
      this.xSpeed = 1;
    }
  }

  action() {
    this.move();
    this.display();

    this.rng = round(random(1, 100));

    //if the random(1,100) = 1 
    //then speed up the car
    if (this.rng === 1) {
      this.speedUp();
      


    }
    //else if the random(1,100) = 2
    //slow down the car
    else if (this.rng === 2) {
      this.speedDown();
      


    }
    //if the random(1,100) = 3
    // change the cars color
    else if (this.rng === 3) {
      this.color = color(random(255), random(255), random(255));
    }
  }
}



