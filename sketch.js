
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,d1,d2,d3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	  paper = new Paper(75,680,70);
    d1 = new Dustbin(800,670,150,10);
    d2 = new Dustbin(732,600,10,150);	
	  d3 = new Dustbin(868,600,10,150);
    ground = new Ground(0,685,2400,10);	
	Engine.run(engine);
  
}


function draw() {
  
  background("brown");
  
 
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  paper.display();
  drawSprites();
 
}


function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(paper.body,(paper.body.position),{x:1000,y:-1200});
  }
}
