
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var tree;
var ground1;
var boy;
var stone;
var mango1,mago2,mango3,mango4,mango5;
var rope;;
function preload()
{
  boy=loadImage('boy.png')
 
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   tree=new Tree()
  ground1=new Ground()
  stone=new Stone()
  mango1=new Mango(700,300)
  mango2=new Mango(600,350)
  mango3=new Mango(750,250)
  mango4=new Mango(800,320)
  mango5=new Mango(650,250)
  rope=new Rope(stone.body,{x:100,y:420})
	Engine.run(engine);
 
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  tree.display()
  ground1.display()
  stone.display()
  imageMode(CENTER); 
  image(boy, 200,500,300,300);
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  rope.display()
 
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  rope.fly()
}


