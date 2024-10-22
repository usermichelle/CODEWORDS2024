let myFont;
let balls = [];
let img;
let sentence='why would you want to disconnect from the internet?';
let clck;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  textFont(myFont);
  
  imageMode(CENTER);
  textAlign(LEFT, CENTER);
}
function preload() {
  img = loadImage('data/codewords_spiral.png');
  myFont = loadFont('data/NeueHaasDisplayLight.ttf');
  clck = loadSound('data/click2.wav');
}

function draw() {
  background(255,255,255);
  
  //WORDS--------------------
  fill(0);
  textSize(int(0.1*width));
  text(sentence, 0.05*width, 0, 1*width, 0.95*height);
  
  
  
  
  //SPHERES-------------------
  for (let i=0; i<balls.length; i++){
    balls[i].drawCircle();
    balls[i].moveCircle();
    balls[i].checkBoundary();
  }
    

}

function mousePressed(){
  clck.play();
}
