//rectangle x and y pos
let rectX=200;
let rectY=300;

//amount X and Y get changed by (3-8)
let num1=random(3,8);
let num2=random(3,8);

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	math();
	background(80,80,80);
	rect(rectY,rectX,250,75);
}

function math(){
	//adds a+c and b+d
	rectY+=num1; rectX+=num2;
	
	//checks if num2>=height-75 or num2<=0
	if (rectY>=height-75||rectY<=0){
		num2=num2*-1;
	}
	
	if (rectY>=width-250||rectY<=0){
		num1=num1*-1;
	}
}