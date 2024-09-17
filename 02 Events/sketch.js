// Events (Mouse/keyboard)
// Jayden Johnson
//  9/12/2024

let tSize = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  
  //if(mouseIsPressed) tSize = random(20,80);
  
  textSize(tSize);  
  let position = mouseX + "," + mouseY;
  text(position,mouseX,mouseY);
  



}

function mousePressed(){
    //called AUTOMATICALLY
  tSize = random(20,200);
  }
  