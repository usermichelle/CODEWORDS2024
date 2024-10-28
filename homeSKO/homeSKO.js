let img;
//let img2;
let song;
let button;
//let img2;



function preload(){
  //img = loadImage('data/Untitled_Artwork2.gif');
  //img2 = loadImage('data/Untitled_Artwork3.gif');
  //img = loadImage('data/danceparty.gif');
  //img2 = loadImage('data/noDance.jpg');
  myFont = loadFont('data/NeueHaasDisplayRoman.ttf');
  song = loadSound("data/Rocktronica.mp3");
}

function setup() {
  createCanvas(windowWidth, 400);
  background(255, 255, 255);
  textFont(myFont);

 
  
  
  
  
 //backgroundMusic();
 
  button = createButton("START the groove!", width/2, height/2);
  button.mousePressed(togglePlaying);
  //button.mouseClicked(Dance);
  
  //button.position(0.015*width, 0.10*height);
  button.position(0.435*width, 0.40*height);
  button.size(150, 40);
  button.style('font-size', '15px');
  button.style('background-color', '#fadb98');
}

document.getElementsById('calls').addEventListener('click', function(){
    togglePlaying();
    Dance()
})
function togglePlaying() {
  if (!song.isPlaying()) {
    
    button.html("STOP the groove!");
    song.play();
    song.setVolume(0.3);
    song.volume();
    //song.loop();
    
    
    
    
    
  } else {
    song.pause(); 
 
    button.html("START the groove!");
  }
}
