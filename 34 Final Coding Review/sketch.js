// Final Coding Practice
// Jan 15, 2025
// Mr. Scott

// Global Variables
let gorillaIdle = [];
let gorillaSwipe = [];
let idleIndex = 0; let swipeIndex = 0;
let gorillaState = 0;  //0 → Idle   1 → Swipe

let spiralImages = [];
let spiralObjects = [];

function preload() { //ensures loading is complete
  //Gorilla Images First   1-6
  for (let i = 1; i <= 6; i++) {
    gorillaIdle.push(loadImage("assets/Gorilla/idle" + i + ".png"));
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe" + i + ".png"));
  }

  //Load Circle Next:   circle00.png  00-15
  for (let i = 0; i <= 15; i++) {
    if (i < 10) {
      spiralImages.push(loadImage("assets/Circle/circle0" + i + ".png"));
    }
    else {
      spiralImages.push(loadImage("assets/Circle/circle" + i + ".png"));
    }
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function keyPressed() {
  if (key === " ") {
    if (gorillaState === 0) gorillaState = 1;
    else gorillaState = 0;
  }
}

function mousePressed(){
  spiralObjects.push( new Spiral(mouseX, mouseY) );
}

function draw() {
  background(220);
  //Spiral Code
  for(let i = 0; i<spiralObjects.length; i++){
    spiralObjects[i].display();
    if(spiralObjects[i].active === false){
      spiralObjects.splice(i, 1);
      i--; //make sure we don't skip an item on deletion...
    }
  }


  //Gorilla Code
  if (gorillaState === 0) { //IDLE
    image(gorillaIdle[idleIndex], width / 2, height / 2);
    if (frameCount % 10 === 0) {
      idleIndex++; //0, 1, 2, 3, 4, 5    6!!!
      if (idleIndex > 5) idleIndex = 0;
    }
  }
  else if (gorillaState === 1) {//SWIPE
    image(gorillaSwipe[swipeIndex], width / 2, height / 2);
    if (frameCount % 10 === 0) {
      swipeIndex++; //0, 1, 2, 3, 4, 5    6!!!
      if (swipeIndex > 5) swipeIndex = 0;
    }
  }
}

class Spiral {
  constructor(x, y) { //runs once, each time an object is made
    this.x = x; this.y = y;
    this.currentFrame = 0;
    this.active = true;
  }
  //class methods
  display() { //0-15
    if(this.currentFrame > 15){
      this.active = false;
    }
    else{
      image(spiralImages[this.currentFrame], this.x, this.y);
      if(frameCount % 3 === 0) this.currentFrame++;
    }
  }
  
}
