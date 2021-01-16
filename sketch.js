var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var hand2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();
	fairyVoice.play(false);

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	fairy.debug = false;
	fairy.setCollider("circle",-300,300)

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:1.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

	hand2 = createSprite(254,510,15,15);
	hand2.visible = false;

}


function draw() {
  background(bgImg);

  keyPressed();

  if(star.isTouching(hand2)){
	  star.velocityY = 0;
  }

  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyDown("LEFT_ARROW")) {
		fairy.x = fairy.x-5;
		hand2.x = hand2.x-5;
	}
	else if (keyDown("RIGHT_ARROW")) {
		fairy.x = fairy.x+5;
		hand2.x = hand2.x+5;
	}
	else if(keyDown("DOWN_ARROW")) {
		star.velocityY = 5;
	}
}
