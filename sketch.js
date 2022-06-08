var bheem,croco,forest,kalia,ladoo,tiger,ground,invisibleGround;
var bheemImg,crocoImg,forestImg,ladooImg,tigerImg,kaliaImg;
var gameState;
var play=1;
var end=0;

gameState=play;

var enemyGroup;

function preload(){
bheemImg=loadImage("sprites/bheem.png");
crocoImg=loadImage("sprites/croco.png");
forestImg=loadImage("sprites/forest.png");
ladooImg= loadImage("sprites/ladoo.png");
kaliaImg=loadImage("sprites/kalia.png");
tigerImg=loadImage("sprites/tiger.png");

}

function setup() {
  createCanvas(1350,600);
forest=createSprite(675,300,1350,600);
forest.addImage(forestImg);
forest.scale=2.0;

ground=createSprite(700,590,1400,20);
ground.visible=false;
  bheem=createSprite(40, 530, 50, 50);
bheem.addImage(bheemImg);
bheem.scale=0.3;

enemyGroup=createGroup();

//invisibleGround=createSprite(700,580,1400,20);
//invisibleGround.visible=false;
}

function draw() {
  background(0);  

  if(gameState==="play"){

  
forest.velocityX=-3;

  if (forest.x < 0){
    forest.x =forest.width/2;
  }

  if(keyDown("space")){
    bheem.velocityY=-5;
  }

  bheem.velocityY=bheem.velocityY +1;

  spawnenemy();
  }
  bheem.collide(ground);
  drawSprites();
  
}

function spawnenemy(){
 if (frameCount % 60 === 0){
    var enemy = createSprite(1300,550,10,40);
    enemy.velocityX = -6;
    
     //generate random enemys
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: enemy.addImage(crocoImg);
               break;
       case 2: enemy.addImage(kaliaImg);
               break;
       case 3: enemy.addImage(tigerImg);
               break;
       
       default: break;
     }
    
     //assign scale and lifetime to the enemy           
     enemy.scale = 0.5;
     enemy.lifetime = 300;
    
    //add each enemy to the group
     //enemyGroup.add(enemy);
  }
}
