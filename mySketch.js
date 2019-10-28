//Simple shape to illustrate how to make functions



function setup() {
  createCanvas(600, 600);  //Create a canvas
  background(0);
  SimpleShape1(100,100,100)
	SimpleShape1(500,500,100)
	SimpleShape1(100,500,100)
	SimpleShape1(500,100,100)
	
} 

function draw() {
	background(0,0,0,2)
	SimpleShape1(mouseX,mouseY,20,50)
	SimpleShape1(frameCount%width,300,50,50)
	SimpleShape1(300,frameCount%height,50,50)
}
	
function SimpleShape1(X,Y,Diameter){
	
	 colorMode(HSB,360,100,100,100)   //color mode Hue: 0-360; sat 0-100; brightness   
  noStroke();
	fill(270,90,70);  
	rectMode(CENTER)
	rect(X, Y, Diameter, Diameter)         //background square
  fill(0,90,70);
  ellipse(X, Y, Diameter, Diameter/4);   //circle 1  horizontal
	fill(90,90,70);
	ellipse(X, Y, Diameter/4, Diameter);   //circle 2 vertical
	fill(180,100,80);
	ellipse(X, Y, Diameter/4, Diameter/4);   //circle 1  center
}
function mousePressed(){
	fill(300,90,100)
	ellipse(mouseX,mouseY,100)
		SimpleShape1(mouseX,mouseY,50)
	
}
