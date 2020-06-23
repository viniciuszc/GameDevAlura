let imageScenario;
let imagePlayer;
let bgAudio;
let scenario;
let player;
let enemy;

function preload(){
  imageScenario = loadImage('images/scenario/floresta.png');
  imagePlayer = loadImage('images/player/correndo.png');
  imageEnemy = loadImage('images/enemy/gotinha.png');
  bgAudio = loadSound('audios/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenario, 4);
  player = new Player(imagePlayer, 1);
  enemy = new Enemy(imageEnemy, )
  //bgAudio.loop();
  frameRate(30);
}

function draw() {
  scenario.show();
  scenario.move();
  player.show();
}