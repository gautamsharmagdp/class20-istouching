var fir,mor;
function setup() {
  createCanvas(800,400);
  fir=createSprite(400, 200, 150, 70);
 mor =createSprite(400,200,70,150);
 fir.shapeColor="blue";
 mor.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
  mor.x=World.mouseX;
  mor.y=World.mouseY;
  console.log(mor.x-fir.x)
  if(mor.x-fir.x<mor.width/2+fir.width/2&&fir.x-mor.x<mor.width/2+fir.width/2&&mor.y-fir.y<mor.height/2+fir.height/2&&fir.y-mor.y<mor.height/2+fir.height/2){
    fir.shapeColor="red";
 mor.shapeColor="red";
  }
  else{
    fir.shapeColor="blue";
 mor.shapeColor="blue";
  }
  drawSprites();
}