
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,hexo,ground2,ground3,state;
var box = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","21","22","23","24","20"];
var ropes;

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	state = 1;

	ground = new Ground(width/2,350,300,10);
	ground2 = new Ground(830,250,200,10)
	ground3 = new Ground(width/2,height-10,width,20);

	hexo = new Hex();

	ropes = new Chain(hexo.body,{x:100, y:300});

  // Stack1 
	// bottom
	box[0] = new Box(390,320,"skyblue");
    box[1] = new Box(425,320,"skyblue");
	box[2] = new Box(460,320,"skyblue");
	box[3] = new Box(495,320,"skyblue");
	box[4] = new Box(530,320,"skyblue");
    box[5] = new Box(565,320,"skyblue");
	box[6] = new Box(600,320,"skyblue");

	// level2,
	box[7] = new Box(425,270,"pink");
	box[8] = new Box(460,270,"pink");
	box[9] = new Box(495,270,"pink");
	box[10] = new Box(530,270,"pink");
	box[11] = new Box(565,270,"pink");

	// level3
	box[12] = new Box(460,220,"turquoise");
	box[13] = new Box(495,220,"turquoise");
	box[14] = new Box(530,220,"turquoise");

	// top
	box[15] = new Box(495,170,"grey");


  //Stack 2cons
	// bottom
	box[16] = new Box(760,220,"skyblue");
 	box[17] = new Box(795,220,"skyblue");
	box[18] = new Box(830,220,"skyblue");
	box[19] = new Box(865,220,"skyblue");
	box[20] = new Box(900,220,"skyblue");

	// level2
	box[21] = new Box(795,170,"pink");
	box[22] = new Box(830,170,"pink");
	box[23] = new Box(865,170,"pink");

	// top
	box[24] = new Box(830,120,"turquoise");

	Engine.run(engine);
}


function draw() {
  background(rgb(56,44,44));

  imageMode(CENTER);

  ground.display();
  ground2.display();
  ground3.display();

  ropes.display();
  hexo.display();

  // Stack1

  // bottom
  box[0].display();
  box[2].display();
  box[1].display();
  box[3].display();
  box[4].display();
  box[5].display();
  box[6].display();

  // level2
  box[7].display();
  box[8].display();
  box[9].display();
  box[10].display();
  box[11].display();

  // level3
  box[12].display();
  box[13].display();
  box[14].display();

 // top
  box[15].display();

//Stack2
 // bottom
 box[16].display();
 box[17].display();
 box[18].display();
 box[19].display();
 box[20].display();

 // level2
 box[21].display();
 box[22].display();
 box[23].display();

 // top
 box[24].display();


if (state===2&&keyDown("space")){

	Matter.Body.setPosition(hexo.body, {x:100,y:300})
	ropes = new Chain(hexo.body,{x:100, y:300});
	state = 1
}
textSize(20);
text("Press Space To Get One More Chance",50,50);
}
function mouseDragged(){

    Matter.Body.setPosition(hexo.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){

    ropes.fly();
	state = 2;
}