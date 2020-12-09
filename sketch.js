
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy1=new Boy(200,620,150,150)

tree1=new Tree(600,520,300,300)

stone1=new Stone(100,500,50,50)
rope1=new Rope(stone1.body,{x:130, y:590})
mango1=new Mangoes(600,500,50,50)
mango2=new Mangoes(490,500,50,50)
mango3=new Mangoes(650,400,50,50)
mango4=new Mangoes(700,450,50,50)
mango5=new Mangoes(750,490,50,50)
mango6=new Mangoes(640,470,50,50)
mango7=new Mangoes(550,410,50,50)
mango8=new Mangoes(670,490,50,50)
mango9=new Mangoes(530,430,50,50)
mango10=new Mangoes(710,490,50,50)




ground=new Ground(width/2,670,width,20)
	Engine.run(engine);
	

}


function draw() {
 // rectMode(CENTER);
  background(0);
  
 // drawSprites();
boy1.display();
ground.display();
tree1.display();
stone1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
mango8.display();
mango9.display();
mango10.display();
rope1.display();
detectCollesion(stone1,mango1)
detectCollesion(stone1,mango2)
detectCollesion(stone1,mango3)
detectCollesion(stone1,mango4)
detectCollesion(stone1,mango5)
detectCollesion(stone1,mango6)
detectCollesion(stone1,mango7)
detectCollesion(stone1,mango8)
detectCollesion(stone1,mango9)
detectCollesion(stone1,mango10)



}


function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function keyPressed(){


if(keyCode===32){

Matter.Body. setPosition(stone1.body,{x:235,y:420})
boy1.attach(stone1.body);

}








}

function mouseReleased(){

rope1.fly();



}

function detectCollesion(lstone,lmango){

mangobodyposition=lmango.body.position
stonebodyposition=lstone.body.position

var distance=dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y)
if(distance<=lmango.width/2+lstone.width/2){
Matter.Body.setStatic(lmango.body,false)


}


}



