
const Engine = Matter.Engine;
const World =Matter.World;
const Bodies =Matter.Bodies
const Body =Matter.Body;

var division  = [];
var divisionHeight = 300;
var particles = [];
var Plinkos = [];

function preload(){

}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,690,800,20);

  for(var i=0;i<=width;i = i+80) {
   divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j=75;j<=width;j = j+50);{
    plinkos.push(new Plinko(j,75));
  }

  for(var j=50;j<=width-10;j = j+50);{
    plinkos.push(new Plinko(j,175));
  }
  
  for(var j=75;j<=width;j = j+50);{
    plinkos.push(new Plinko(j,275));
}

for(var j=50;j<=width-10;j = j+50);{
   plinkos.push(new Plinko(j,375));
}
Engine.run(engine);
}


function draw() {
  rectMode(CENTRE);
  background(0); 
   
  drawSprites();
  

 for(var n = 0;n < division.length;n++){
   division[n].display();
 }
 if(frameCount %60 === 0){
   particles.push(new Particle(random(width/2-30,width/2+30),10,10))
 }
 for(var h = 0;h < particles.length;h++){
   particles[h].display();
 }
 for(var j = 0;j < plinkos.length;j++){
   plinkos[j].display();
 }

 ground.display();
}