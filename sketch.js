var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 30, 80);
  fixedRect.shapeColor=("orange");
  fixedRect.debug=true;

  movingRect=createSprite(600,200,80,30);
  movingRect.shapeColor=("orange");
  movingRect.debug=true;
}

function draw() {
  background(0);  

movingRect.x=mouseX;
movingRect.y=mouseY;

if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 
  && fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2
  && movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2
  && fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2){
  
   movingRect.shapeColor="blue";
   fixedRect.shapeColor="blue";
}
else{
   movingRect.shapeColor="orange";
   fixedRect.shapeColor="orange";
}
  drawSprites();
}