var movingRect,fixedRect; 
function setup() {
createCanvas(1200,800);
movingRect = createSprite(800,200,100,30);
movingRect.shapeColor = "green";
fixedRect = createSprite(200,200,50,80);
fixedRect.shapeColor = "green"; }

function draw() {
background(0,0,0); 
movingRect.y = World.mouseY; 
movingRect.x = World.mouseX; 
 movingRect.debug=true;
fixedRect.debug = true; 
if (movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2){
movingRect.shapeColor="red";
fixedRect.shapeColor = "red";
} 
else {
movingRect.shapeColor="blue";
fixedRect.shapeColor = "blue"; 
} 
 console.log(movingRect.x-fixedRect.x);
drawSprites(); }
