var garden,rabbit;
var gardenImg,rabbitImg;
var apple,orange,red;
var appleimage,carrotimage,redimage;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimage=loadImage("apple.png");
  orangeimage=loadImage("orangeLeaf.png");
  redimage=loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  var select_sprites=Math.round(random(1,3))
  if (frameCount%80==0){
    if (select_sprites==1){
      createApples()
    }
    else if(select_sprites==2){
      createOrange()
    }
    else{
      createRed
    }
  }
}
function createApples() {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleimage);
  apple.scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
    
  }
  
  function createOrange() {
  orange = createSprite(random(50, 350),40, 10, 10);
  orange.addImage(orangeimage);
  orange.scale=0.08;
  orange.velocityY = 3;
  orange.lifetime = 150;
  }
  
  function createRed() {
  red = createSprite(random(50, 350),40, 10, 10);
  red.addImage(redimage);
  red.scale=0.06;
    red.velocityY = 3;
    red.lifetime = 150;
  }
  