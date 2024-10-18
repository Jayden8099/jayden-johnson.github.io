// Cars Cars Cars
// Jayden Johnson
// 10/18/2024



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  drawRoad();
}


function drawRoad() {

  fill(0);
  rect(0, height / 2 - 100, width, 200);

  
  
  //FIX
  
  // for (let x = 0; x <= width; x + 20) {
  //   stroke('white');
  //   strokeWeight(2);
  //   line(0 + x, height / 2, 0 + x * 2, height / 2);
  // }




}

class Vehicle {
  constructor(x, y) {

  }
}