// Tic Tac Toe
// Jayden
// 11/6/2024

let tiles = [];


let grid = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]];

let rectWidth, rectHeight;
let currentCol, currentRow;


const COLUMNS = 3, ROWS = 3;



let turn = true;


function setup() {
  createCanvas(948, 950);
  stroke(0);
  fill(255);
  rectWidth = width / COLUMNS;
  rectHeight = height / ROWS;
}

function draw() {
  background(220);
  renderBoard();
  determineActiveSquare();

}

function mousePressed() { // broken fix
  if (grid[currentCol][currentRow] === 0 && turn === true) {
    grid[currentRow][currentCol] = 1;
    turn = !turn;
    print(turn);
  }
  else if (grid[currentCol][currentRow] === 0 && turn === false) {
    grid[currentRow][currentCol] = 2;
    turn = !turn;
    print(turn);
  }
  
}





function determineActiveSquare() {
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}


function renderBoard() {
  for (let col = 0; col < COLUMNS; col++) { // x
    for (let row = 0; row < ROWS; row++) {  // y
      fill(255);
      rect(col * rectWidth, row * rectHeight, rectWidth, rectHeight);

      if (grid[row][col] === 1) {

        push();
        rectMode(CENTER);
        fill(255, 0, 0);
        rect(col * rectWidth + rectWidth / 2, row * rectHeight + rectHeight / 2, rectHeight);


        fill(255);
        textAlign(CENTER);
        textSize(200);
        text('X', col * rectWidth + rectWidth / 2, row * rectHeight + rectHeight / 2 + 75);
        pop();
      }
      else if (grid[row][col] === 2) {

        push();
        rectMode(CENTER);
        fill(0, 0, 255);
        rect(col * rectWidth + rectWidth / 2, row * rectHeight + rectHeight / 2, rectWidth, rectHeight);


        fill(255);
        textAlign(CENTER);
        textSize(200);
        text('O', col * rectWidth + rectWidth / 2, row * rectHeight + rectHeight / 2 + 75);
        pop();
      }
    }
  }
}
