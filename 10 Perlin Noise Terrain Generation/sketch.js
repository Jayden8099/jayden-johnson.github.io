// Perlin Noise Terrain Generation
// Jayden Johnson
// 10/1/2024


let h = 3;
let w = 1;




function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  generateTerrain();

}

function draw() {
  



}



function generateTerrain() {

  fill(0);

  for (let x = 0; x < width; x += 1) {
    
    let rectHeight = noise(h);
    rectHeight = map(rectHeight, 0, 1, 10, 600);

    rect(x, height, w, -rectHeight);
    h += 0.01
  }
}

function keyPressed() {
  generateTerrain();
  if(keyPressed = LEFT_ARROW){
    w -= 10
    if(w <= 0){
      w = 1
    }
  }
}





