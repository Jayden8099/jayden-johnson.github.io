// Perlin Noise Demo
// Jayden
// 9/27/2024

//random() vs noise()

let cTime = 5; // current noise time
let cInterval = 0.005;// how fast we move down the noise graph


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  background(220);
  line(width / 2, 0, width / 2, height);


  //draw with random()
  randomCircle();

  //draw with noise()
  perlinCircle();


  staircase()

}

function randomCircle() {

  //draw a circle that uses random()
  //unpredictable size (later color)

  let cSize = random(1, 255);

  fill(cSize - 100, 255 - cSize, cSize / 2)
  circle(width * 0.25, height / 2, cSize);

  textAlign(CENTER, CENTER);
  textSize(20); fill(0);
  text(round(cSize), width * 0.25, height / 2);


}

function perlinCircle() {
  //draw a circle using noise
  // unpredictable size(later color)
  let cSize = noise(cTime);
  cSize = map(cSize, 0, 1, 1, 255);

  let r = noise(cTime);
  let g = noise(cTime + 2);
  let b = noise(cTime + 5);

  r = map(r, 0, 1, 0, 255);
  g = map(g, 0, 1, 0, 255);
  b = map(b, 0, 1, 0, 255);


  fill(r, g, b);
  circle(width * 0.75, height / 2, cSize)
  text(round(cSize), width * 0.75, height / 2);
  cTime += cInterval;
}

function staircase() {
  randomSeed(2);
  fill(0);
  for (let x = 0; x < width; x += 1) {
    //20... rectangle spacing / rectwidth
    let rectHeight = random(10, 50);
    
    rect(x, height, 1, -rectHeight);
  }



}
