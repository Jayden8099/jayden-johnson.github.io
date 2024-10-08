// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  clockFace();


}


function clockFace() {

  push();
  translate(200, 200);
  rotate(0);
  circle(0, 0, 300);
  fill(0);
  circle(0, 0, 10);

  
  let minSpokes = 60;
  let hourSpokes = 12;


  let s = second();
  let m = minute();
  let h = hour();

  map(s,0,59,0,360);

  for (let i = 0; i < minSpokes; i++) {
    line(145, 0, 135, 0);
    rotate(6);
  }
  for (let i = 0; i < hourSpokes; i++) {
    line(145, 0, 120, 0);
    line(145, 0, 120, 0);
    rotate(30);
  }
  
  
  //second hand
  push();
  rotate(s);
  line(0, 0, 0, -90);
  pop();
 
  
  push();
  rotate(m);
  line(0,0,0,-100);
  pop();
  

  // push();
  // rotate(h);
  // line(0,0,0,-100);
  // pop();
 

  
    
    
 






  pop();


}
