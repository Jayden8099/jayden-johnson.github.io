//Puzzle Game
//Jayden Johnson
//10/31/2024

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 255, 0, 0, 0],
                [255, 255, 255, 0, 0]];

let winCheck; // if wincheck = 20 all the squares are white, if wincheck = 0 all the squares are black

let color; //whether it is black or white (used to randomize the board)

let type = 1; //type for the overlay (cross, square)


function setup() {
  // Determine the size of each square. Could use windowHeight,windowHeight  for Canvas to keep a square aspect ratio
  createCanvas(windowWidth, windowHeight);
  rectWidth = width / NUM_COLS;
  rectHeight = height / NUM_ROWS;
  randomizeBoard();
  textSize(64);

}

function draw() {
  background(220);
  determineActiveSquare();   //figure out which tile the mouse cursor is over
  drawGrid();                //render the current game board to the screen (and the overlay)
  winCondition();
  highlight(currentCol, currentRow);
}



function mousePressed() {
  // cross-shaped pattern flips on a mouseclick. Boundary conditions are checked within the flip function to ensure in-bounds access for array

  if (type === 1) {
    if (keyIsPressed && keyCode === SHIFT) { // flips over 1 when shift is held
      flip(currentCol, currentRow);
    }
    else {
      flip(currentCol, currentRow); //flips a cross pattern
      flip(currentCol - 1, currentRow);
      flip(currentCol + 1, currentRow);
      flip(currentCol, currentRow - 1);
      flip(currentCol, currentRow + 1);
    }
  }
  else {
    if (keyIsPressed && keyCode === SHIFT) {//flips over one when shift is held
      flip(currentCol, currentRow);
    }
    else {
      flip(currentCol, currentRow);//flips a square pattern
      flip(currentCol + 1, currentRow);
      flip(currentCol, currentRow - 1);
      flip(currentCol + 1, currentRow - 1);
    }


  }
}
function keyPressed() {
  if (keyIsPressed && keyCode === 32) {
    type = -type; //Flips between square and cross based on whether it is negative
  }
}

function flip(col, row) {
  // given a column and row for the 2D array, flip its value from 0 to 255 or 255 to 0
  // conditions ensure that the col and row given are valid and exist for the array. If not, no operations take place.
  if (col >= 0 && col < NUM_COLS) {
    if (row >= 0 && row < NUM_ROWS) {
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare() {
  // An expression to run each frame to determine where the mouse currently is.
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid() {
  // Render a grid of squares - fill color set according to data stored in the 2D array
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      fill(gridData[y][x]);
      rect(x * rectWidth, y * rectHeight, rectWidth, rectHeight);
    }
  }
}

function winCondition() {
  winCheck = 0;
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      if (gridData[y][x] === 255) {     // if a square is black +1 to wincheck
        winCheck += 1;
      }
      else {
        winCheck += 0; // if a square is white +0 to wincheck
      }
    }
  }
  if (winCheck === 20) { // if all the squares are black you win
    push();
    fill(0);
    text('You Win', width / 3, height / 3);
    pop();
  }
  else if (winCheck === 0) { // if all the squares are white you win
    push();
    fill(255);
    text('You Win', width / 3, height / 3);
    pop();
  }
}

function randomizeBoard() {
  for (let x = 0; x < NUM_COLS; x++) {
    for (let y = 0; y < NUM_ROWS; y++) {
      color = round(random(0, 1));  //picks a number between 0,1
      if (color === 0) {            // if it is 0 set the color at the current pos in array 
        gridData[int(y)][int(x)] = 0; // to black
      }
      else {
        gridData[int(y)][int(x)] = 255; //if it is one then set it to white
      }
    }
  }
}

function highlight(col, row) {
  if (type === 1) {      //checks if highlight is for the cross or square
    if (col >= 0 && col < NUM_COLS) {
      if (row >= 0 && row < NUM_ROWS) {
        fill(0, 255, 0, 50);//cross highlight
        rect(currentCol * rectWidth, currentRow * rectHeight, rectWidth, rectHeight); //draws faint green rectangles at the rectangle the mouse is over
        rect((currentCol + 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);// and at the surrrounding rectangles
        rect((currentCol - 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);
        rect(currentCol * rectWidth, (currentRow + 1) * rectHeight, rectWidth, rectHeight);
        rect(currentCol * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight);
      }
    }
  }
  else {
    fill(0, 255, 0, 50); // square highlight
    rect(currentCol * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);  //draws faint green rectangles at the rectangle the mouse is over
    rect((currentCol + 1) * rectWidth, currentRow * rectHeight, rectWidth, rectHeight);// and at the square above, right and diagonaly from it
    rect(currentCol * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight);
    rect((currentCol + 1) * rectWidth, (currentRow - 1) * rectHeight, rectWidth, rectHeight);
  }
}

