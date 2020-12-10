const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

//Joker's game
var tank, tank_img;
var bomb = [];
var bomb_img;
var invisible_obstacle = [];

function setup() {
  createCanvas(1000,800);
 
engine = Engine.create();
world = engine.world;

for(var a = 75; a <= width; a = a + 50){
  invisible_obstacle.push(new InvisibleObs(a,75));
}

for(var a = 50; a <=width; a = a + 50){
  invisible_obstacle.push(new InvisibleObs(a,175));
}

for(var a = 75; a <= width; a = a + 50){
  invisible_obstacle.push(new InvisibleObs(a,275));
}

for(var a = 50; a <= width; a = a + 50){
  invisible_obstacle.push(new InvisibleObs(a,375));
}

}

function draw() {
  background(0);  

  Engine.update(engine);

 

for(var a = 0; a < invisible_obstacle.length; a++){
    invisible_obstacle[a].display();
  }

  if(frameCount%50 === 0){
    bomb.push(new Bomb(random(0,800),0,10));
  }

  for(var c = 0; c < bomb.length; c++){
    bomb[c].display();
  }

  drawSprites();
}