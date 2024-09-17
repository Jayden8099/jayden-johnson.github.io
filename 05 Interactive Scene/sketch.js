// Interactive Scene
// Jayden Johnson
// 9/16/2024

let shapeSize = 50;
let currentBack = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
    
}

function draw() {
  background(0,200,255);    
  landscape();
  sun();
  rectMode(CENTER);

}


function sun(){
  fill(255,255,0);
  noStroke();
  circle(mouseX,height/5,shapeSize+20);
  fill(0,0,0);
  circle(mouseX-15,height/5,shapeSize-40);
  circle(mouseX+15,height/5,shapeSize-40);
  rect(mouseX,height/5-30,shapeSize+5,6);
  rect(mouseX,height/5-55,shapeSize-20,45);
}


function landscape(){
fill(0,100,255);
circle(width/2,height,1200);
fill(0,255,0);
circle(width/2+300,height-150,+150);
circle(width/2-300,height-150,+150);
circle(width/2,height-100,shapeSize);
fill(0,100,255)
circle(width/2,height-100,shapeSize-15);
}

function keyPressed() {
if(keycode = 87);{
  fill(0,0,0);
  rect(width/2,height/2,1000,1000);
  }

}