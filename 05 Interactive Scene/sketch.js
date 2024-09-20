// Interactive Scene
// Jayden Johnson
// 9/16/2024


let shapeSize = 50;
let currentBack = 0;

//cloud x position
let cX = 200



//cloud character x and y
let ccX = 100
let ccY = 100


function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50) 
  rectMode(CENTER);
  
    
}

function draw() {
  backDrop();
  earth();
  sun();
  cloud();
  cloudCharacter();
  text("Jayden", width-200, height-20);
  

}
  


function sun(){
  //draws the moving sun in the top that follows the mouse
  fill(255,255,0);
  noStroke();
  circle(mouseX,mouseY,shapeSize+40);
  fill(0,0,0);
  circle(mouseX-15,mouseY-10,shapeSize-38);
  circle(mouseX+15,mouseY-10,shapeSize-38);
  rect(mouseX,mouseY-37,shapeSize+7,10);
  rect(mouseX,mouseY-60,shapeSize-20,45);

}


function earth(){
//draws the earth

fill(0,100,255);
circle(width/2,height,1200);
fill(0,255,0);
circle(width/2+300,height-150,+150);
circle(width/2-300,height-150,+150);
circle(width/2,height-100,shapeSize);
fill(0,100,255)
circle(width/2,height-100,shapeSize-15);
}



function mousePressed() {
//changes currentBack by one so the background changes
  if(mouseButton === CENTER) currentBack++;

if(currentBack > 3){
  currentBack = 0;
  }
}

function backDrop(){
  //uses currentBack to determine the background color
  if(currentBack === 0) background(0,200,255);
  
  else if(currentBack === 1) background(220,150,0);

  else if(currentBack === 2) background(100,0,200);

  else background(20,20,20);
}


function cloud(){
  
  randomSeed(5);
  
  for(let i = 0; i < 40; i++){
   cY1 = random(0,height-100);
   cxR = random(-1000,1000);
   
   fill(255)
   ellipse(cX+cxR, cY1, 110, 90);
   ellipse(cX +cxR + 20, cY1  + 20, 110, 90);
   ellipse(cX+cxR - 20, cY1 + 20, 110, 90); 
  }
  




  cX += 2
  if(cX >= width+1200) {
    cX = -1000;
    
  }
}





function cloudCharacter() {

  
  
  fill(255)
  ellipse(ccX, ccY, 80, 60);
  ellipse(ccX + 10, ccY  + 10, 80, 60);
  ellipse(ccX - 20, ccY + 10, 80, 60);
  fill(0,0,0)
  circle(ccX+15,ccY,shapeSize-40)
  circle(ccX-15,ccY,shapeSize-40)
  

  
  //uses WASD to controll the cloud character(the one with eyes)
  if(keyIsPressed && key === "a") ccX -= 5;
  else if(keyIsPressed && key === "d") ccX += 5;
  else if(keyIsPressed && key === "s") ccY += 5;
  else if(keyIsPressed && key === "w") ccY -= 5;
}