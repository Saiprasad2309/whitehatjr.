var FixedRect,MovingRect;

function setup() {
  createCanvas(800,400);
  MovingRect=createSprite(400,350,130,60);
  MovingRect.shapeColor="blue";
  MovingRect.velocityY=-9;
  FixedRect=createSprite(400, 200, 50, 50);
  FixedRect.shapeColor="yellow";
  FixedRect.velocityY=9;
}

function draw() {
  background(0);
  if(MovingRect.x-FixedRect.x<FixedRect.width/2+MovingRect.width/2
    && FixedRect.x-MovingRect.x<FixedRect.width/2+MovingRect.width/2)
    {
MovingRect.velocityX=MovingRect.velocityX*(-1);
FixedRect.velocityX=FixedRect.velocityX*(-1)
    } 

    if(MovingRect.y-FixedRect.y<FixedRect.height/2+MovingRect.height/2
      && FixedRect.y-MovingRect.y<FixedRect.height/2+MovingRect.height/2)
      {
  MovingRect.velocityY=MovingRect.velocityY*(-1);
  FixedRect.velocityY=FixedRect.velocityY*(-1)
      }   
/*MovingRect.x=World.mouseX;
MovingRect.y=World.mouseY;
if(MovingRect.x-FixedRect.x<FixedRect.width/2+MovingRect.width/2
  && FixedRect.x-MovingRect.x<FixedRect.width/2+MovingRect.width/2
  && MovingRect.y-FixedRect.y<FixedRect.height/2+MovingRect.height/2
  && FixedRect.y-MovingRect.y<FixedRect.height/2+MovingRect.height/2){
  MovingRect.shapeColor="yellow";
  FixedRect.shapeColor="yellow";
}
else{
  MovingRect.shapeColor="blue";
  FixedRect.shapeColor="yellow";
}*/
  drawSprites();
}