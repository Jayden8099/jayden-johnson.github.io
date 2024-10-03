// Perlin Noise Terrain Generation
// Jayden Johnson
// 10/1/2024




//The rectangles width
let rectW = 1;


let rTime = 5;
let rInterval = 0.01


//gets the flag x and y based on the higest point
let flagX = 0;
let flagY = 0;




function setup() {
 
  createCanvas(windowWidth, windowHeight);
  //background(220);
  //generateTerrain();



}

function draw() {
  rTime = 5;
  background(220);
  generateTerrain();
  drawFlag(flagX, height - flagY);




}



function generateTerrain() {
  //randomly generates the terrain
  
  fill(255);

  flagX = 0
  flagY = 0

  for (let x = 0; x <= width; x += rectW) {
    //noiseSeed(5);
    let rectHeight = noise(rTime);
    rectHeight = map(rectHeight, 0, 1, 1, 800);

    rect(x, height, rectW, -rectHeight);
    rTime += rInterval;
    if(x >= width){
      x - rectW;
    }
    





    //coords for the highest point
    if (flagY <= rectHeight) {
      flagY = rectHeight;
      flagX = x;
    }
  }

}

function keyPressed() {


  //if the right arrow is pressed it widens the rectangles
  //redraws the flag at the highest peak
  if (keyCode === RIGHT_ARROW) {
    background(220);
    rectW += 0.5;
    generateTerrain();


    //if the left arrow is pressed it slims the rectangles
    //redraws the flag at the highest peak
  } else if (keyCode === LEFT_ARROW) {
    background(220);
    rectW -= 0.5;
    generateTerrain();



    if (rectW <= 1) {
      rectW = 1;
    }
  }
}

function drawFlag(x, y) {
  //draws the flag at the highest peak
  fill(255, 255, 0);
  rect(x, y, 0, -20);
  triangle(x, y - 20, x, y - 10, x + 10, y - 15);
}




