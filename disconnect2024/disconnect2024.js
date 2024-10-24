let click;
let myFont;
let balls = [];
let img;
let sentence='why would you want to disconnect from the internet?';

function preload(){
  click = loadSound('data/click2.wav');
  img = loadImage('data/codewords_spiral.png');
  myFont = loadFont('data/NeueHaasDisplayLight.ttf');
  click= loadSound('data/click2.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  textFont(myFont);
  
  imageMode(CENTER);
  textAlign(LEFT, CENTER);
}


function draw() {
  background(255);
  
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

function mouseClicked(){
    click.setVolume(20);
  click.play();
}

function mousePressed(){
  balls.push(new Ball(mouseX, mouseY));
  
}
class Ball{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.dx = random(-1, 1)*3; //speed
    this.dy = random(-1, 1)*4; //speed
  }
  drawCircle(){
    fill(255, 255, 0);
    image(img, this.x, this.y, 170, 170);
    //ellipse(this.x, this.y, 30, 30);
  }
  
  moveCircle(){
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }
  
  checkBoundary(){
    if (this.x > width || this.x < 0){
      this.dx = this.dx * -1;
    }
    if (this.y > height || this.y < 0){
      this.dy = this.dy * -1;
    }
  }
  
}
