let imageScenario;
let imagePlayer;
let bgAudio;
let scenario;
let player;

function preload(){
  imageScenario = loadImage('images/scenario/floresta.png');
  imagePlayer = loadImage('images/player/correndo.png');
  bgAudio = loadSound('audios/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenario, 2);
  player = new Player(imagePlayer, 15);
  //bgAudio.loop();
  //frameRate(60);
}

function draw() {
  scenario.show();
  scenario.move();
  player.show();
}