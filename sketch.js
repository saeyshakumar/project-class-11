var path

function preload(){
  //pre-load images
 pathImg= loadImage ("path.png");
  jaxonImg= loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 path= createSprite(200,200);
 path.addImage("p",pathImg);
 path.velocityY=4;
 path.scale=1.2;
 jaxon=createSprite(200,360,30,30);
 jaxon.addAnimation("j",jaxonImg)
 jaxon.scale = 0.1
 left_b= createSprite(0,0,100,800);
 right_b=createSprite(410,0,100,800);
 left_b.visible=false
 right_b.visible=false
}

function draw() {
  background(0);
drawSprites();
if(path.y>400){
  path.y=height/2
}
jaxon.x=mouseX
edges=createEdgeSprites();
jaxon.collide(edges[3])
jaxon.collide(left_b)
jaxon.collide(right_b)
}
