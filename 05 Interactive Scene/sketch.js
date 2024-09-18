// Interactive Scene
// Jayden Johnson
// 9/16/2024


let shapeSize = 50;
let currentBack = 0;

//cloud x and y pos
let cX = 200
ran1 = Math.floor(Math.random() * 950);
ran2 = Math.floor(Math.random() * 950);
ran3 = Math.floor(Math.random() * 950);
ran4 = Math.floor(Math.random() * 950);




function setup() {
  createCanvas(windowWidth, windowHeight);
    
}

function draw() {
  backDrop();
  earth();
  sun();
  rectMode(CENTER);
  cloud(cX);
  
  cX += 0.5
  if(cX >= width) {
    cX = -270;
  }
  
}
  
  


function sun(){
  //draws the moving sun in the top
  fill(255,255,0);
  noStroke();
  circle(mouseX,height/5,shapeSize+20);
  fill(0,0,0);
  circle(mouseX-15,height/5,shapeSize-40);
  circle(mouseX+15,height/5,shapeSize-40);
  rect(mouseX,height/5-30,shapeSize+5,6);
  rect(mouseX,height/5-55,shapeSize-20,45);
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
  
  else if(currentBack === 1) background(150,200,0);

  else if(currentBack === 2) background(183,0,200);

  else background(123,57,100);
}


function cloud(cX){





  
  fill(255)
  ellipse(cX, ran1, 80, 60);
  ellipse(cX + 10, ran1  + 10, 80, 60);
  ellipse(cX - 20, ran1 + 10, 80, 60);



  ellipse(cX+ 75, ran2, 80, 60);
  ellipse(cX + 75 + 10, ran2  + 10, 80, 60);
  ellipse(cX + 75 - 20, ran2 + 10, 80, 60);


  ellipse(cX - 100, ran3, 80, 60);
  ellipse(cX - 100 + 10, ran3  + 10, 80, 60);
  ellipse(cX - 100 - 20, ran3 + 10, 80, 60);

  ellipse(cX + 250, ran4, 80, 60);
  ellipse(cX + 250  + 10, ran4  + 10, 80, 60);
  ellipse(cX + 250 - 20, ran4 + 10, 80, 60);

 
}