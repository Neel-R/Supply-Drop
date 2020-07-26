var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, ground1,ground2,package1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1

	groundSprite=createSprite(400, height-35, 200,10);
	groundSprite.shapeColor=color(255,0,0)

	ground1 = createSprite(500,700,10,200);
	ground1.shapeColor = color(255,0,0);

	ground2 = createSprite(300,700,10,200);
	ground2.shapeColor=color(255,0,0)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true, friction:5});
	World.add(world, packageBody);
	
	package1 = new Package(width/2, 80, 10,10);

	//Create a Ground
	ground = Bodies.rectangle(400, 650, 200, 10 , {isStatic:true} );
 	World.add(world, ground);

	ground1 = Bodies.rectangle(500,700,10,200, {isStatic:true});
	World.add(world, ground1);

	ground2 = Bodies.rectangle(300,700,10,200, {isStatic:true});
	World.add(world, ground2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
  }
}



