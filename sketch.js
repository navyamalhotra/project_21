var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1534,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,100,30);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  thickness = random(22,83);
  wall = createSprite(1450,200,thickness,height/1.25);
  wall.shapeColor = "white";
  
  
}

function draw() {
  background(0); 
 
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage<10){
      wall.shapeColor = "green";
    }
    if(damage>10){
   wall.shapeColor = "red";
    }
  }
  fill("green");
  textSize(30);
  text("Damage = "+damage,600,50);
  drawSprites();
}