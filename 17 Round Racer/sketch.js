// Round Racers
// Jayden
// 10/15/2024



//variable method
let racer1;
let racer2;
let racer3;




//Loop and Array method
//let racers = [];







function setup() {
  createCanvas(windowWidth, windowHeight);
 
  //Loop and Array Method
  // racers.push(new roundRacer(height / 1.5, "green"));
  // racers.push(new roundRacer(height / 2, "blue"));
  // racers.push(new roundRacer(height / 2.5, "red"));

  
  //Variable Method
  racer1 = new roundRacer(height/2.5, "red" );
  racer2 = new roundRacer(height/2, "blue");
  racer3 = new roundRacer(height/1.5, "green");
}

function draw() {
  background(220);
  
  //loop and array method
  // for (let i = 0; i < racers.length; i++) {
  //   racers[i].display();
  //   racers[i].move();
  // }

  
  //Variable Method
  racer1.move();
  racer1.display();
  racer2.move();
  racer2.display();
  racer3.move();
  racer3.display();


}



class roundRacer {

  constructor(yPos, color) {
    this.xPos = 0;
    this.yPosition = yPos;
    this.xSpeed = random(3, 15);
    this.color = color;
  }
  move() {
    this.xPos += this.xSpeed;
    if (this.xPos > width) {
      this.xPos = 0;
    }
  }


  display() {
    fill(this.color);
    circle(this.xPos, this.yPosition, 50);
  }










}