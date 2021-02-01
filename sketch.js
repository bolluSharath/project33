const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var score = 0;
var count = 0;
var gameState ="start";


function preload(){
  
}
function setup() { 
  createCanvas(750,800);
  
  

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(300, 785, 900, 30);

  //create division bodies
  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create plinko bodies
  for (var j = 40; j <= width; j = j + 60){
    plinkos.push(new Plinko(j, 85,10));
  }
  for (var j = 15; j <= width - 10; j = j + 60){
    plinkos.push(new Plinko(j, 185,10));
  }
  for (var j = 40; j <= width; j = j + 60){
    plinkos.push(new Plinko(j,285,10));
  }
  for (var j = 15; j <= width - 10; j = j + 60){
    plinkos.push(new Plinko(j, 385,10));
  }

  //spawn particles
  
  
}

function draw() {
  Engine.update(engine);
  background(0);
 
  fill(255,0,0)
  textSize(30)
  text("Score : "+score,20,40);

  fill(255,0,0)
  textSize(25)
  text("500",25,530)
  text("500",100,530)
  text("500",175,530)
  text("200",260,530)
  text("200",340,530)
  text("200",420,530)
  text("100",500,530)
  text("100",580,530)
  text("100",660,530)

  if ( count>= 5) {
    gameState ="end";
    textSize(100);
    text("GameOver", 150, 250);
  }



  if (frameCount % 100 === 0){
    particles.push(new Particle(random(width-20, width/2+20), 10, 10));
  }

  ground.display();
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  drawSprites();
  
  
}

function mousePressed(){
  if(gameState!=="end"){
      count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   
}
