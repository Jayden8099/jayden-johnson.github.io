// Drawing With Loops
// Jayden Johnson
// 9/19/2024



function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  myBackground();
  myForeground();
  //screen is updated at end of draw
  noStroke();


}

function myBackground(){
  //use a loop to draw a gradient background
  let rectHeight = 1;
  
  for(let y = 0; y < height; y+= rectHeight){
    let value = map(y,0,width,0,255);
    fill(100-value,255-value,value);
    rect(0,y,width,rectHeight);
    
  }
  
}

function myForeground(){
  //use FOR / WHILE loops to draw on the canvas
  for(let x = 0; x  < mouseX; x= x + 40){
    fill(0);
    circle(x,height/2, 40);
    fill(255);
    text(x,x,height/2);
  }
randomSeed(5);
let starCount = 0;
fill(255,0,0); //red
while(starCount < 100){
  let x = random(0,width);
  let y = random(0,height);
  circle(x,y,10);



  starCount++;
}

}