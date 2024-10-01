// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//global variables
let currentColor = 0; //0, 1, 2 
let circleSize = 50;
let myColor;
let growing = false;



function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = color(50, 120, 255) // 3-tuple

}

function draw() {
  background(255);


  //circle code -  fill value
  switch (currentColor) {
    case 0:
      fill(255, 0, 0);
      break;
    case 1:
      fill(myColor);
      break;
    case 2:
      fill(0, 255, 255);
  }
  if (frameCount % 30 === 0) {
    currentColor++;
    if (currentColor > 2) {
      currentColor = 0;
    }
  }




  //circle grow/shrink
  if (growing) {
    circleSize += 2;
  }
  else {
    circleSize -= 2;
  }

  //draw circle
  circle(width / 2, height / 2, circleSize);


}

function keyPressed() {
  if (key = "a") {
    growing = !growing;
  }
}