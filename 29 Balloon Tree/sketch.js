//Balloon Tree
//Jayden Johnson
//11/13/2024




let ang; //angle for the tree will change by

let scale = 15;

let seed; // used for randomseed

let bDepth = 1; //Depth that balloons are drawn at


function setup() { 
  createCanvas(500, 500);
  background(255);
  seed = random(1, 100);  //generates a number 1,100
}

function draw() {
  background(255);
  randomSeed(seed); // uses seed to generate a randomseed
  drawTree(width / 2, height * 0.9, 90, 6);
}

function keyPressed() {
  if (key === 'z') { // if the key pressed is z decrease the depth
    bDepth--;        // that the ballons are drawn at
    if (bDepth <= 1) {
      bDepth = 1;   // makes sure the depth cant go negative
    }
  }
  else if (key === 'x') { // if the key pressed is x increase the depth
    bDepth++;            // that the balloons are drawn at
    if (bDepth > 7) {
      bDepth = 7;       //makes sure the depth cant go to a depth is greater than 7
    }
  }
}

function drawLine(x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {


  ang = map(mouseX, 0, width, 0, 22.5); //maps mouseX to a number between 0 and 22.5, which acts as an angle based on where the mouse is

  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle)) * depth * scale);     //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle)) * depth * scale);     //using trig ratios. Get shorter based on depth


    push();
    strokeWeight(depth);  //makes the branch sizes varied throughout using the depth as a stroke size
    drawLine(x1, y1, x2, y2, depth);
    pop();

    if (depth < bDepth && depth < 2) {    //checks to see if the depth is less than the ballon depth
      drawLeaf(x2, y2, random(15, 25));    //and if the depth is less than the depth number and draws a balloon at the specified depth
    }
    else if (depth < bDepth && depth < 4) { //the bigger the depth the bigger range of sizes the balloon can be
      drawLeaf(x2, y2, random(15, 35));
    }
    else if (depth < bDepth && depth < 6) {
      drawLeaf(x2, y2, random(15, 50));
    }
    else if (depth < bDepth && depth < 7) {
      drawLeaf(x2, y2, random(15, 60));
    }



    //for a 3-branch tree:
    drawTree(x2, y2, angle - ang, depth - 1); //changes angle by ang which = map(mouseX, 0, width, 0, 22.5)
    drawTree(x2, y2, angle + ang, depth - 1);
    drawTree(x2, y2, angle, depth - 1);
  }
}

function drawLeaf(x, y, d) {


  fill(random(255), random(255), random(255)); //generates a random color for the balloon
  circle(x, y, d);                             //Draws a circle at the provided x, y, and with d(diameter)
}