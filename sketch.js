var dog, happyDog, dogImg, happyDogImg, database, foodStock,x,m, w,foodS, m1, updown, p, d, n;

function preload()
{
  dogImg = loadImage("images/Dog.png");
  happyDogImg = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  var d = new Date();
  var n = d.getDate();
  dog = createSprite(250, 250);
  dog.addImage("doggy", dogImg);
  dog.scale = 0.25;

  var foodS = database.ref("Food");
  foodS.on("value", readFood);
 
}


function draw() {  

 background(46, 180, 87);

  if(keyWentDown(UP_ARROW)){

    writeStock("up",m);
    dog.addImage("doggy",happyDogImg);
    d = new Date();

  }

  if(keyWentDown(DOWN_ARROW)){

    writeStock("down",m);
    dog.addImage("doggy",dogImg);
    
  }
  textSize(14);
  fill("white");
  text("Press the up arrow key to feed the dog and down arrow key to add food.", 30, 100);
  text("Food left: "+m, 220, 450);
  text("Last fed: "+ d, 30, 370);

 
  drawSprites();
}

function readFood(data){
  x = data.val();
  m = x.milk;  
  console.log(x)}

function writeStock(updown,m){

  if(updown==="up"){
    database.ref("Food").set({
      milk: m-1,

  })}
  if(updown==="down"){
    database.ref("Food").set({
      milk:20,
  })}
}