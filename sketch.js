var fixed_rect,moving_rect;

function setup() {
  createCanvas(800,400);
  moving_rect = createSprite(400, 200, 50, 50);
  moving_rect.shapeColor = "green";
  fixed_rect = createSprite(700, 300, 60, 70);
  fixed_rect.shapeColor = "green";

  moving_rect.debug = true;
  fixed_rect.debug = true;
}

function draw() {
  background(255,255,255);  
  moving_rect.y = World.mouseY;
  moving_rect.x = World.mouseX;
  
  console.log(fixed_rect.width/2 + moving_rect.width/2);
  
  if(fixed_rect.width/2 + moving_rect.width/2 > moving_rect.x - fixed_rect.x 
  && fixed_rect.width/2 + moving_rect.width/2 > fixed_rect.x - moving_rect.x
  && fixed_rect.height/2 + moving_rect.height/2 > moving_rect.y - fixed_rect.y 
  && fixed_rect.height/2 + moving_rect.height/2 > fixed_rect.y - moving_rect.y){
    fixed_rect.shapeColor = "red";
    moving_rect.shapeColor = "red";
  }
  else{
    fixed_rect.shapeColor = "green";
    moving_rect.shapeColor = "green";
}

  drawSprites();
}