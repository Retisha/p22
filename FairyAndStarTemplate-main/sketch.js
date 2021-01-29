const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png")
 starImg = loadImage("images/star.png")
 bg = loadImage("images/starnight.png")
  //preload the images here
}

function setup() {
  createCanvas(800, 750);
  
  engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(700 , 100 , 5 , {isStatic:true});
  World.add(world, starBody);
  
  star = createSprite(700,100)
  star.addImage(starImg)
  star.scale = 0.3
  fairy = createSprite(100,400)
  fairy.addAnimation("fairy12",fairyImg)
  fairy.scale = 0.3
  Engine.run(engine);
}


function draw() {
  background(bg);
  star.x = starBody.position.x
  star.y = starBody.position.y
  if(keyDown("right")){
    fairy.x+=4
  }
  if(starBody.position.y>380){
    Matter.Body.setStatic(starBody,true)
  }
drawSprites();
}
function keyPressed(){
  if(keyCode === DOWN_ARROW){
    console.log("keyPressed")
    Matter.Body.setStatic(starBody,false)
  }
}
