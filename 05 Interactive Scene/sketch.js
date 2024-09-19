// Interactive Scene
// Jayden Johnson
// 9/16/2024


let shapeSize = 50;
let currentBack = 0;

//cloud x position
let cX = 200
//generates random y coordinates for the clouds
let cY1 = Math.floor(Math.random() * 800);
let cY2 = Math.floor(Math.random() * 800);
let cY3 = Math.floor(Math.random() * 800);
let cY4 = Math.floor(Math.random() * 800);


//cloud character x and y
let ccX = 100
let ccY = 100


function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50)
  text("Jayden", width-200, height-20); 
  rectMode(CENTER);
  
    
}

function draw() {
  backDrop();
  earth();
  sun();
  cloud();
  cloudCharacter();
  

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
  //draws 4 clouds at a random y coord (0-800)
  //tried to get a loop working but could not find a way
  
  fill(255)
  ellipse(cX, cY1, 110, 90);
  ellipse(cX + 20, cY1  + 20, 110, 90);
  ellipse(cX - 20, cY1 + 20, 110, 90);

  
  ellipse(cX+ 75, cY2, 80, 60);
  ellipse(cX + 75 + 10, cY2  + 10, 80, 60);
  ellipse(cX + 75 - 20, cY2 + 10, 80, 60);


  ellipse(cX - 100, cY3, 110, 90);
  ellipse(cX - 100 + 10, cY3  + 10, 110, 90);
  ellipse(cX - 100 - 20, cY3  + 10, 110, 90);

  ellipse(cX + 250, cY4, 80, 60);
  ellipse(cX + 250  + 10, cY4  + 10, 80, 60);
  ellipse(cX + 250 - 20, cY4 + 10, 80, 60);



  cX += cY1 * 0.01
  if(cX >= width + 270) {
    cloudY();
    cX = -270;
    
  }
}


function cloudY(){
  //when the clouds reach the end of the screen it randomizes the y pos
  cY1 = Math.floor(Math.random() * 800);
  cY2 = Math.floor(Math.random() * 800);
  cY3 = Math.floor(Math.random() * 800);
  cY4 = Math.floor(Math.random() * 800);
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