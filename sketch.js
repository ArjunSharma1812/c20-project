var issImg, bathImg, gymImg, drinkImg, eatImg, moveImg, sleepImg, brushImg; 

var astronaut,iss;

function preload(){
  issImg = loadImage("Imgs/iss.png");
  bathImg = loadAnimation("Imgs/bath1.png", "Imgs/bath2.png");
  gymImg = loadAnimation("Imgs/gym1.png", "Imgs/gym2.png", "Imgs/gym11.png", "Imgs/gym12.png");
  drinkImg = loadanimation("Imgs/drink1.png", "Imgs/drink2.png");
  eatImg = loadanimation("Imgs/eat1.png", "Imgs/eat2.png");
  moveImg = loadanimation("Imgs/move.png", "Imgs/move1.png");
  sleepImg = loadImage("Imgs/sleep.png");
  brushImg = loadImage("Imgs/brush.png");
}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 200, 10, 10);
  iss.addImage("iss", issImg);
  iss.scale = 0.161;

  astronaut = createSprite(300, 230, 10, 10);
  astronaut.addImage("astronaut", sleepImg);
  astronaut.scale = 0.1;

}

function draw() {
  background(0);  
  drawSprites();
}