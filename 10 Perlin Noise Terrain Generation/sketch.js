// Perlin Noise Terrain Generation
// Jayden Johnson
// 10/1/2024




//The rectangles width
let rectW = 1;

//noise time and interval
let rTime = 0;
let rInterval = 0.01


//gets the flag x and y based on the higest point
let flagX = 0;
let flagY = 0;

//rectangle total
let rT = 0;
//height total
let hT = 0;




function setup() {

  createCanvas(windowWidth, windowHeight);




}

function draw() {
  //set rTime to frameCount/15
  //gives effect of scrolling
  rTime = frameCount/15;

  background(220);
  generateTerrain();
  lineAverage()
  drawFlag(flagX, height - flagY);


  
  
  

  



}



function generateTerrain() {
  //randomly generates the terrain

  fill(255);

  flagX = 0
  flagY = 0
  hT = 0
  rT = 0

  //draws the terrain till it reaches the width
  for (let x = 0; x <= width; x += rectW) {
  
    let rectHeight = noise(rTime);
    rectHeight = map(rectHeight, 0, 1, 1, 800);

    rect(x, height, rectW, -rectHeight);
    rTime += rInterval;
    if (x >= width) {
      x - rectW;
    }
    
    
    //used for finding the average height
    hT += rectHeight
    rT++
    







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
    rectW += 0.1;
    generateTerrain();


    //if the left arrow is pressed it slims the rectangles
    //redraws the flag at the highest peak
  } else if (keyCode === LEFT_ARROW) {
    background(220);
    rectW -= 0.1;
    generateTerrain();


    //makes sure rectW does not go below 1
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



function lineAverage(){
  //divides the total height by the total rectangles
  average = hT / rT
  stroke(255,0,0);
  line(0, height-average ,width, height-average);
  stroke(0);
}
