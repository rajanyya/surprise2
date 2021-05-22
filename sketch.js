var hello,r,ri,a,m,d,mi;
var Img,Img1,Img2,Img3,Img4,Img5;

function preload()
{
	Img=loadImage("Rajanyya.png")
}

function setup() {
	hello=createButton("Surprise!")
  hello.position(500,95);
 hello.mousePressed(surprise);

 //image=createSprite(50,50,50,50);

}


function draw() {
	
}

function surprise(){
	r=createButton("Rajanyya")
  r.position(500,95);
  r.mousePressed(Press);
  

  ri=createButton("Ritoja")
  ri.position(600,95);
  ri.mousePressed(Press1);

  a=createButton("Anvita")
  a.position(700,95);
  a.mousePressed(Press2);

  m=createButton("Maanvi")
  m.position(800,95);
  m.mousePressed(Press3);

  d=createButton("Diya")
  d.position(900,95);
  d.mousePressed(Press4);

  mi=createButton("Mihika")
  mi.position(1000,95);
  mi.mousePressed(Press5);
}


function Press1(){

}
function Press2(){

}
function Press3(){

}
function Press4(){

}
function Press5(){

}