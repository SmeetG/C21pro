var bullet,wall;
var bullet,speed,weight;
var wall,thickness;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)

  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.shapeColor=color(255,255,255)
  bullet.velocityX = speed;
  wall.shapeColor=color(80,80,80)
  thickness=random(22,83)
  
  speed=random(223,321)
  weight=random(30,52)
}

function draw() {

  background(0); 
  
  
if(wall.x-bullet.x<(bullet.width+wall.width)/2) 
{
   bullet.velocityX=0;
   bullet.collide(wall);
}

if (hascollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if (damage <10 ){
    wall.shapeColor(0,255,0)
  }

  if (damage >10 ){
    wall.shapeColor(255,0,0)
  }


}

  drawSprites();
}

function hascollided(lbullet,lwall)
{
   bulletRightEdge=lbullet.x +lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
   return false 
}
