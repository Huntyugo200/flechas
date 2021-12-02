var bow;
var arrow;
var fundo;
var bowImage;
var arrowImage;
var green_balloonImage;
var red_balloonImage;
var pink_balloonImage;
var blue_balloonImage;
var fundoImage;
var blue;
var green;
var pink;
var red;

var score=0;

function preload(){
  fundoImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
   red_balloonImage = loadImage("red_balloon0.png");
   
}



function setup() {
  createCanvas(400, 400);

  //fundo 
  fundo = createSprite(0,0,400,400);
  fundo.addImage(fundoImage);
  fundo.scale = 2.5
  
  //arco 
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0

}

function draw() {
 background(0);
 
 fundo.velocityX = -3 

    if (fundo.x < 0){
      fundo.x = fundo.width/2;
    }
  
  
  bow.y = World.mouseY
  
   
  if (keyDown("space")) {
    gerarflecha();
    
  }
 
    var numeroaleatorio = Math.round(random(1,4));
   
  
  if (World.frameCount % 100 == 0) {
    if (numeroaleatorio == 1) {
      balaored();
    } else if (numeroaleatorio == 2) {
      balaogreen();
    } else if (numeroaleatorio == 3) {
      balaoblue();
    } else {
      balaopink();
    }
  }
  
  text("Pontuação: "+ score, 300,50)

  drawSprites();
}

function gerarflecha(){
  arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;

}

function balaoazul(){
  blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function balaogreen(){
  green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function balaopink(){
  pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink .addImage(pink_balloonImage);
  pink .velocityX = 3;
  pink .lifetime = 150;

}

function balaored(){
  red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red .lifetime = 150;
  red .scale = 0.1;

}