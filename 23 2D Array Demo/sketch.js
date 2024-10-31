
// 2D Array Demo
// Jayden Johnson
// 10/28/2024

let grid = [[0, 255, 255, 0, 255],
           [255, 0, 255, 0, 255],
           [0, 0, 255, 255, 0]];

let row, col;

const NUM_ROWS = 3;
const NUM_COLS = 5;

let rectWidth, rectHeight;

function renderGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(grid[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}
function getArrayX() {
  return int(mouseY / rectHeight);
}
function getArrayY() {
  return int(mouseX / rectWidth);
}

function setup() {
  createCanvas(500, 300);
  rectWidth = 500 / NUM_COLS;
  rectHeight = 300 / NUM_ROWS;
}

function draw() {
  row = getArrayY();
  col = getArrayX();
  background(220);
  renderGrid();

  // if (frameCount % 30 === 0) {
  //grid[int(random(NUM_ROWS))][int(random(NUM_COLS))] = random(255);
  //}
}

function mousePressed() {
  if(grid[col][row] === 0){
    grid[col][row] = 255;
  }
  else{
    grid[col][row] = 0;
  }

}

