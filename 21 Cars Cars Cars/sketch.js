// Cars Cars Cars
// Jayden Johnson
// 10/18/2024
let test1;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  test1 = new Vehicle(width/2, height/2, 0, 0);
}

function draw() {
  background(220);
  drawRoad();
  //test1.display();
  test1.action();

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
      rect(this.x, this.y, 100, 25);
    }
    else {
      fill(this.color);
      rect(this.x, this.y, 40);
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
      this.xSpeed += -3;
      if (-this.xSpeed <= -this.MAX_SPEED) {
        this.xSpeed = -this.MAX_SPEED;
      }
      else if(-this.xSpeed >= 0){
        this.xSpeed = 0;
      }
    }
  }



  speedDown() {
    //Left Moving Traffic
    if (this.direction === 0) {
      this.xSpeed - 1;
      if (this.xSpeed <= -this.MAX_SPEED) {
        this.xSpeed = -this.MAX_SPEED;
      }
    }
    //Right Moving Traffic
    else {
      this.xSpeed + 1;
      if (this.xSpeed >= 0) {
        this.xSpeed = 0;
      }
    }
  }
  action(){
    this.move();
    this.display();
    
    this.rng = round(random(1,100));
    
   
    
    if(this.rng === 1){
      //this.speedUp();
      //print('speed up');
      //print(this.xSpeed);
    }
    else if(this.rng === 2){
      //this.speedDown;
      //print('speed down');
    }
    else if(this.rng === 3){
      this.color = color(random(255), random(255), random(255));
      //print('changed color');
    }
    
  }
}
