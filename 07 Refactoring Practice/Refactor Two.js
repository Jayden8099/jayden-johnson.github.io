// This example is adapted from Learning Processing Example 5-3 by Daniel Shiffman
// http://www.learningprocessing.com
// Refactor the following code. Be sure the refactored version:
//  - is readable
//  - is able to work easily with any canvas size

function setup() {
    createCanvas(480, 270);
}





function draw() {
    background(255);
    stroke(0);
    line(240, 0, 240, 270);
    line(0, 135, 480, 135);
    noStroke();
    fill(0);
    
    //if mouse x is on the left of the screen
    //and mouse y is on the top of the screen
    if (mouseX<width/2 && mouseY<height/2){
        rect(0,0,width/2,height/2);
    }
    
    else if (mouseX>width/2 && mouseY<height/2){
        rect(width/2,0,width/2,height/2);
    }
    
    else if (mouseX<width/2 && mouseY>height/2){
        rect(0,height/2,width/2,height/2);
    }
    
    else if (mouseX>width/2 && mouseY>height/2){
        rect(width/2,height/2,width/2,height/2);
    }
}
