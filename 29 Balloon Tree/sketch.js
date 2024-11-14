//Balloon Tree
//Jayden Johnson
//11/13/2024




let ang;

let scale = 15;

let seed;

let bDepth = 7;


function setup() {
  createCanvas(500, 500);
  background(255);
  seed = random(1, 100);
}

function draw() {
  background(255);
  randomSeed(seed);
  drawTree(width / 2, height * 0.9, 90, 6);
}

function keyPressed() {
  if (key === 'z') {
    bDepth--;
    print(bDepth);
    if(bDepth <= 1){
      bDepth = 1;
    }
  }
  else if (key === 'x') {
    bDepth++;
    print(bDepth);
    if(bDepth > 7){
      bDepth = 7;
    }
  }
}

function drawLine(x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {


  ang = map(mouseX, 0, width, 0, 22.5);

  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle)) * depth * scale);     //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle)) * depth * scale);     //using trig ratios. Get shorter based on depth


    push();
    strokeWeight(depth);
    drawLine(x1, y1, x2, y2, depth);
    pop();

    if (depth < bDepth) {
      drawLeaf(x2, y2, random(30, 40));
    }



    //for a 3-branch tree:
    drawTree(x2, y2, angle - ang, depth - 1);
    drawTree(x2, y2, angle + ang, depth - 1);
    drawTree(x2, y2, angle, depth - 1);
  }
}

function drawLeaf(x, y, d) {


  fill(random(255), random(255), random(255));
  circle(x, y, d);
}