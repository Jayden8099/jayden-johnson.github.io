// Drawing Challenge
// Jayden Johnson
// 9/13/2024



let rX = 60;  let rY = 50;
let 



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  //moving rectangle
  
  if(keyIsPressed && key==="a"){
    
    
    rY += 2;
    if(rY > height) rY = 0;
  }




  fill(200,255,150);
  rect(rX,rY,100,50,20,20,0,10);
  
}

function keyPressed(){
//dont call this function
if(keycode === DOWN_ARROW){
    rY += 50;
}
}



