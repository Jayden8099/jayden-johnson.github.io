// Alien Drawing
// Jayden Johnson
// 9/13/2024






function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  noStroke()
  
}

function draw() {
  background(220);
  Alien()
  noStroke()

}


function Alien(){
  fill(125,255,125)
  circle(width/2,height/2, 100);
  rect(width/2, height/2+25, 100,50);
  rect(width/2-47, height/2+50,6,50);
  rect(width/2+47, height/2+50,6,50);
  fill(0,0,0)
  circle(width/2 + 30, height/2, 10);
  circle(width/2 - 30, height/2, 10);
  
  stroke(0,0,0)
  
  line(width/2+20, height-450, width/2-20, height-450);

}