var PLAY=1;
var END =0;
var gameState= 1;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkey_collided = loadAnimation("sprite_0.png");
  
  bananaImage = loadImage("banana.png");
ObstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200);
  
  monkey=createSprite(50,160,20,50);
  monkey.addAnimation('running',monkey_running);
  monkey.scale=0.1;
  invisibleGround = createSprite(200,210,400,10);
  invisibleGround.visible = false;
  
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
  score = 0;  
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
obstacleGroup=createGroup();
  bananaGroup=createGroup();
  
  
}


function draw() {
background(250);
  
   text("Score: "+ score, 500,50);
  
  if(gameState===PLAY){
    
   
  
  
  if(keyDown("space")&& monkey.y >= 170){
   monkey.velocityY= -12; 
  }
   
    monkey.velocityY=monkey.velocityY+0.5;
     spawnPoints();
  SpawnObstacles();
    
    if(obstacleGroup.isTouching(monkey)){
      gameState = END;
        }
    
    if (monkey.isTouching(bananaGroup)){
      bananaGroup.destroyEach();
      score += 10;
    }
  }
   else if (gameState === END) {
      monkey.changeAnimation("collided", monkey_collided);
      ground.velocityX = 0;
      monkey.velocityY = 0;
    
      
     obstacleGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0);
      
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
     
         
   }
  
  
   
monkey.collide(invisibleGround);
  
  drawSprites();
}
  function SpawnObstacles(){
    if(frameCount%60===0){
      obstacle=createSprite(700,185,40,10);
      obstacle.velocityX=-(6+score/100);
      obstacle.addImage(ObstacleImage);
      obstacle.scale=0.1;
      obstacle.lifetime=200
      obstacle.depth=monkey.depth
      monkey.depth+=1;
      obstacleGroup.add(obstacle);
    }
   
  }
   function spawnPoints(){
  if (frameCount % 60 === 0) {
    
    
      banana = createSprite(650,100,40,10);
   banana.velocityX = -(6 + score/100);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.depth = monkey.depth;
    monkey.depth += 1;
    
     
    banana.lifetime = 200;
   
    bananaGroup.add(banana);
}
  
  
   }  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  







  