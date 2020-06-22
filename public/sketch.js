let imageScenario;
let imagePlayer;

function preload(){
  imageScenario = loadImage('images/scenario/floresta.png');
  imagePlayer = loadImage('images/player/correndo.png');
}

function setup() {
  scenario = new Scenario(imageScenario, 50);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  scenario.show();
  scenario.move();

  background(imageScenario);
  image(
    imagePlayer,
    0,
    height - 160,
    110, 
    135,
    0,
    0,
    220, 
    270
  );
}

class Scenario {
  constructor(image, speed){
    this.image = imagem;
    this.speed = speed
    this.x1 = 0;
    this.x2 = width;
  }

  show(){
    image(this.image, this.x1, 0, width, height);
    image(this.image, this.x2, 0, width, height);
  }

  move(){
    this.x1 = this.x1 - this.speed;
    this.x2 = this.x2 - this.speed;

    if(this.x1 < 0){
      this.x1 = width;
    }

    if(this.x2 < 0){
      this.x1 = width;
    }
  }

}