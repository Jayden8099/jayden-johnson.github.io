// Coordinate Systems
// Jayden Johnson
// 9/11/2024
// Looking at how coordinates work in p5.js



function setup() {
  print("setup runs once, at the start.")
  createCanvas(500, 400);
  
}

function draw() {
  //run over and over (targeting 60fps)
  background(220);
  drawCircles()
  
  

}
function drawCircles(){
  //draw some circles
  fill(100,200,255);
  circle(0,0,50);
  
  fill(204,102,0);
  circle(width,0,50);

  fill(255,75,50);
  circle(width,height,50);

  fill(0,255,80);
  circle(0,height,50);

  fill(130,30,255);
  circle(width/2,height/2,50);
}