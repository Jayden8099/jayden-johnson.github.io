//Black and White Target


const ellipse_X_Y = 200




function setup() {
createCanvas(400, 400);
}





function draw() {
background(240);
target()

}




function target(){
let ellipWH = 400

for(let i = 0; i <= 10; i++){
    ellipse(ellipse_X_Y, ellipse_X_Y, ellipWH, ellipWH);
    ellipWH - 40;
}

}







// ellipse(200, 200, 400, 400);
// ellipse(200, 200, 360, 360);
// ellipse(200, 200, 320, 320);
// ellipse(200, 200, 280, 280);
// ellipse(200, 200, 240, 240);
// ellipse(200, 200, 200, 200);
// ellipse(200, 200, 160, 160);
// ellipse(200, 200, 120, 120);
// ellipse(200, 200, 80, 80);
// ellipse(200, 200, 40, 40);
