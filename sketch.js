const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var polygon
var ground1 
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, 
block13, block14, block15, block16

var  $block1, $block2, $block3, $block4, $block5, $block6, $block7, $block8, $block9, $block10,
 $block11, $block12, $block13, $block14, $block15, $block16 

var moon, moonImg

function  preload() {
  
moonImg  = loadImage("Moon.jpg")

}


function setup(){

createCanvas(1280,607)

   engine = Engine.create();
   world = engine.world;

 // Bodies should be created here

   moon = createSprite(80,40,30)
   moon.addImage("moonImg",moonImg)
   moon.scale = 0.1

   polygon = new Polygon()


  ground1 = new Ground(640,580,2480,)
  ground2 = new Ground(760,280,250)
  ground3 = new Ground(1080,480,250)
  launcher = new Launcher(polygon.body,{x:150, y:300})

  block1 = new Block(760,-200)
  block2 = new Block(727,-200)
  block3 = new Block(694,-200)
  block4 = new Block(661,-200)
  block5 = new Block(793,-200)
  block6 = new Block(826,-200)
  block7 = new Block(859,-200)
  block8 = new Block(760,-250)
  block9 = new Block(727,-250)
  block10 = new Block(694,-250)
  block11 = new Block(793,-250)
  block12 = new Block(826,-250)
  block13 = new Block(760,-300)
  block14 = new Block(727,-300)
  block15 = new Block(793,-300)
  block16 = new Block(760,-350)

  $block1 = new Block(1080,-200)
  $block2 = new Block(1047,-200)
  $block3 = new Block(1014,-200)
  $block4 = new Block(981,-200)
  $block5 = new Block(1113,-200)
  $block6 = new Block(1146,-200)
  $block7 = new Block(1179,-200)
  $block8 = new Block(1080,-250)
  $block9 = new Block(1047,-250)
  $block10 = new Block(1014,-250)
  $block11 = new Block(1113,-250)
  $block12 = new Block(1146,-250)
  $block13 = new Block(1080,-300)
  $block14 = new Block(1047,-300)
  $block15 = new Block(1113,-300)
  $block16 = new Block(1080,-350)
 
 Engine.run(engine)

}

function draw(){

background(20,31,66)

polygon.display()
ground1.display()
ground2.display()
ground3.display()
launcher.display()

block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()

$block1.display()
$block2.display()
$block3.display()
$block4.display()
$block5.display()
$block6.display()
$block7.display()
$block8.display()
$block9.display()
$block10.display()
$block11.display()
$block12.display()
$block13.display()
$block14.display()
$block15.display()
$block16.display()


drawSprites()

}

function mouseDragged(){

Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY})

}

function mouseReleased(){

launcher.fly()

}