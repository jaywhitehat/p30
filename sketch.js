const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1;
var box2,box3,box4;
var box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15,box16;
var sling,ball;

function setup() {
  createCanvas(800,400);
  box1 = new Box(390,155,30,40);

  box2 = new Box(360,195,30,40);
  box3 = new Box(390,195,30,40);
  box4 = new Box(420,195,30,40);

  box5 = new Box(330,235,30,40);
  box6 = new Box(360,235,30,40);
  box7 = new Box(390,235,30,40);
  box8 = new Box(420,235,30,40);
  box9 = new Box(450,235,30,40);

  box10 = new Box(450,200,30,40);
  box11 = new Box(450,200,30,40);
  box12 = new Box(450,200,30,40);
  box13 = new Box(450,200,30,40);
  box14 = new Box(450,200,30,40);
  box15 = new Box(450,200,30,40);
  box16 = new Box(450,200,30,40);  

  ball = new Box(150,200,20,20);
  sling = new SlingShot(ball.body,{x:100,y:200});
  
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display(); 
  box11.display(); 
  box12.display(); 
  box13.display(); 
  box14.display(); 
  box15.display(); 
  box16.display(); 

drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if (keyCode === 32){
   sling.attach(this.ball);
  }
}