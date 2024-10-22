// Cars Cars Cars
// Jayden Johnson
// 10/18/2024


let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  for (let i = 0; i < 20; i++) {
    eastbound.push(new Vehicle((random(0, width)), random(height / 2 + 30, height / 2 + 200), round(random(0, 1)), 0));
    westbound.push(new Vehicle((random(0, width)), random(height / 2 - 30, height / 2 - 200), round(random(0, 1)), 1));
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
  if (keyIsPressed && keyCode === SHIFT) {
    westbound.push(new Vehicle((random(0, width)), random(height / 2 - 30, height / 2 - 200), round(random(0, 1)), 1));
    print(westbound.length+'west');
  }
  else{
    eastbound.push(new Vehicle((random(0, width)), random(height / 2 + 30, height / 2 + 200), round(random(0, 1)), 0));
    print(eastbound.length+'east');
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
