//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
	//load images here
  dogImage = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
    dog = createSprite(250, 250);
    dog.addImage(dogImage);
    dog.scale = 0.5;
    database = firebase.database();
    foodStock = database.ref('Food');
      foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)) {
      writeStock(foodS);
      dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here
  textSize(18);
  fill("green");
  stroke(2);
}

//function to read values from DB
function readStock(data){
  foodS = data.val();
}

//function to write values in DB
function writeStock(x){
  if(x<=0){
      x = 0;
    } 
    else{
      x=x-1;
    }
  }
  
  database.ref('/').update({
    Food:x
  }
)