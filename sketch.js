var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200,300,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect1 = createSprite(300, 100, 50, 80);
  fixedRect1.shapeColor = "green";

  fixedRect2 = createSprite(300, 200, 50, 80);
  fixedRect2.shapeColor = "green";

  fixedRect3 = createSprite(300, 300, 50, 80);
  fixedRect3.shapeColor = "green";

  fixedRect4 = createSprite(300, 400, 50, 80);
  fixedRect4.shapeColor = "green";

}

function draw() 
{
  background("gold");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(istouching(movingRect,fixedRect3))
  {
    movingRect.shapeColor = "red";
    fixedRect3.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect3.shapeColor = "green";
  }
  
  drawSprites();
}


