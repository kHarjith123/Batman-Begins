const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var lightning;

var maxDrops=100;

var lightningframe = 0;


function preload(){

    lightning1 = loadImage("1.png");
    lightning2 = loadImage("2.png");

}

function setup(){
    createCanvas(400,700);

    engine = Engine.create();
    world = engine.world;

    Walkingman = new Man (200,500);

    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }

    }

   
    
   
}

function draw(){

    Engine.update(engine);
    background(0); 

    rand = Math.round(random(1,4));

    if(frameCount%80===0){
        lighningframe=frameCount;
        lightning = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: lightning.addImage(lightning1);
            break;
            case 2: lightning.addImage(lightning2);
            break; 
            default: break;
        }
        lightning.scale = random(0.3,0.6)
    }

    if(lightningframe + 10 ===frameCount && lightning){
        lightning.destroy();
    }

    Walkingman.display();

    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update()
        
    }

    drawSprites();
    
}   

