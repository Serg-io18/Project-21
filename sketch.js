var canvas;
var music;
var box1,box2,box3,box4;
var jump;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(100,550,200,40);
    box1.shapeColor = "blue"
    box2 = createSprite(300,550,200,40);
    box2.shapeColor = "red"
    box3 = createSprite(500,550,200,40);
    box3.shapeColor = "green"
    box4 = createSprite(700,550,200,40);
    box4.shapeColor = "yellow"
    //create box sprite and give velocity
    jump = createSprite(random(50,700),300,50,50);
    jump.velocityY = 10;
    jump.velocityX = 7
    edges = createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    jump.bounceOff(edges)

    jump.bounceOff(box1);
    jump.bounceOff(box2);
    jump.bounceOff(box3);
    jump.bounceOff(box4);
    if (jump.isTouching(box1) && jump.bounceOff(box1)) {
        jump.shapeColor = "blue"
    }
    if (jump.isTouching(box2) && jump.bounceOff(box2)) {
        jump.shapeColor = "red"
    }
    if (jump.isTouching(box3) && jump.bounceOff(box3)) {
        jump.shapeColor = "green"
    }
    if (jump.isTouching(box4) && jump.bounceOff(box4)) {
        jump.shapeColor = "yellow"
    }

    //add condition to check if box touching surface and make it box
    drawSprites();
}
