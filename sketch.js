
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600, 300);
  
  monkey = createSprite(98,251,20,50);
  monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;
  
  
  
  ground = createSprite(48,287,1200,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  console.log(ground.x)
  
}




function draw() {
background(225);
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  
  //call the functions
  banana();
  obstacle();
 
  if(keyDown("space") && monkey.y >= 159){
    monkey.velocityY=-12
    
  }
  
  
    
    
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
 text("survival Time: "+ survivalTime,100,50); 
  
  
  
  console.log(mouseX+";"+mouseY)
   drawSprites();
}

function banana() {
  
  if (frameCount % 60 === 0) {
   var banana=createSprite(118,147,50,50)
   banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
  }
}

function obstacle() {
  if(frameCount % 200 === 0) {
var obstacles= createSprite(333,273,10,40);
    
    
    obstacles.addImage(obstacleImage);
 obstacles.scale = 0.2;
    obstacles.velocityX=-3;
    obstacles.lifetime = 300;
  }
}
