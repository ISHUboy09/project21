var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(25,30);
 

  bullet = createSprite(50, 200, 50, 10);
  wall = createSprite(1200,200,thickness/2);


 
 bullet.velocityX = speed

 thickness = random(22,83);
 
}

function draw() {
  background("black");  



  if(bullet.x - wall.x < wall.width/2 + bullet.width/2)
  {
     bullet.velocityX=0;
    var damage =0.5 * weight * speed* speed/(thickness *thickness *thickness);
    
    if(damage>10)
    {
      wall.shapeColour=color(255,0,0)
    }
  
    
    if(damage<10)
    {
      wall.shapeColour=colour(0,255,0);
    }
  
  }

  drawSprites();
}








