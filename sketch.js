var wall; 
var bullet;
var speed, thickness, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 20);
  bullet.velocityX=speed;

  wall=createSprite(1200, 200, thickness, 200);
}

function draw() {
  background(0);  

  if(wall.x-bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/thickness * thickness * thickness;

    if(damage < 10){
      wall.shapeColor=("green");
    }

    if(damage > 10){
      wall.shapeColor=("red");
    }
  }
  
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage = 0.5 * weight * speed * speed /(thickness * thickness * thickness);

  if(damage>10){
    wall.shapeColor=color("green");
  }

  if(damage<10){
    wall.shapeColor=color("red");
  }
}