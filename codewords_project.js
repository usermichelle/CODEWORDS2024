let myFont;
let x = 100;
let y = 100;
let dx = 2;
let dy = 3;
let img;

function preload() {
  myFont = loadFont('data/NeueHaasDisplayRoman.ttf');
  img = loadImage('data/codewords_spiral.png');
}
  
  
function setup() {
createCanvas(windowWidth, windowHeight)
background(255, 255, 255)
textFont(myFont);
}


function draw() {
background(255, 255, 255);  
textSize(150);
  textAlign(CENTER);
  text('why would you want', width/2, 0.30*height);
  
  textAlign(RIGHT);
  text('to disconnect from', 0.875*width, 0.55*height);
  
  textAlign(RIGHT);
  text('the internet?', 0.615*width, 0.80*height);
  
  //ellipse(x, y, 150, 150);
  image(img, x, y, 170, 170);
  x = x + dx;
  y = y + dy;
  if (x > width || x < 0){
    dx = dx * -1;
  }
  if (y > height || y < 0){
    dy = dy * -1;
  }
}
