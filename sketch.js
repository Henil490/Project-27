
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(300,300,300,30);
bobObj1=new Bob=(300,500,20);
rope1=new Rope=(b1.body,{x:300,y:300});
bobObj2=new Bob=(260,500,20);
rope2=new Rope=(b2.body,{x:260,y:300});
bobObj3=new Bob=(220,500,20);
rope3=new Rope=(b3.body,{x:220,y:300});
bobObj4=new Bob=(340,500,20);
rope4=new Rope=(b4.body,{x:340,y:300});
bobObj5=new Bob=(380,500,20);
rope5=new Rope=(b5.body,{x:380,y:300});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
rope1.display;
rope2.display;
rope3.display;
rope4.display;
rope5.display;
bobObj1.display;
bobObj2.display;
bobObj3.display;
bobObj4.display;
bobObj5.display;
roof.display;










  drawSprites();
 
}



