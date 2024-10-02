// Perlin Noise Terrain Generation
// Jayden Johnson
// 10/1/2024





let rectW = 3;


let flagX = 0;
let flagY = 1;




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  generateTerrain();
  drawFlag(width / 2, flagY);
  print(flagY);

}

function draw() {
  
  

}



function generateTerrain() {

  fill(255);
  let cTime = 1;


  for (let x = 0; x <= width; x += rectW) {

    let rectHeight = noise(cTime);
    rectHeight = map(rectHeight, 0, 1, 10, 700);

    rect(x, height, rectW, -rectHeight);
    cTime += 0.01
    

    
    if (flagY < rectHeight) {
      flagY = rectHeight
      print("RECT " + rectHeight);
    }
  }
  
}

function keyPressed() {
  background(220)


  if (keyCode === RIGHT_ARROW) {
    background(220);
    generateTerrain();
    rectW += 0.3
  } else if (keyCode === LEFT_ARROW) {
    background(220);
    generateTerrain();
    rectW -= 0.3
    if (rectW <= 1) {
      rectW = 1
    }
  }
}

function drawFlag(x, y) {
  fill(255, 255, 6);
  rect(x, y, 20);
}




