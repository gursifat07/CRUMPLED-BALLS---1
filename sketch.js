
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,375,1200,10)
	dustbinBase = new Dustbin(850,360,150,15);
	dustbinSide1 = new Dustbin(775, 315, 15, 75);
	dustbinSide2 = new Dustbin(925, 315, 15, 75);
	paper = new Paper(100, 200, 10);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbinBase.display();
  dustbinSide1.display();
  dustbinSide2.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:22, y: -15})	}
  }
  

