function setup() {
  createCanvas(400, 400);
}
let olhoX
let olhoY


function draw() {
  background("pink");
  //rosto
  fill("blue");
  circle(200, 200, 300);
  fill("")
  stroke('black')
  strokeWeight(9)
  circle(150, 150, 60);
  circle(250, 150, 60);
 
  
  //pupila
  fill("pink")
 //circle(150, 150,10)//olho esquerdo
 //circle(250,150,10)//olho direito
  olhoX= map(mouseX,0,400, 125,170)
  olhoY=map (mouseY,0,400,125,170)
  
  circle(olhoX, olhoY,10)
  circle(olhoX+100,olhoY, 10)
  
  line(120, 242, 290, 265);
  triangle(202, 184, 157, 224, 242, 223);
  line(203, 51, 193, 4);
  line(205, 51, 239, 6);
  line(203, 51, 160, 14);
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
    
    
  }
}
