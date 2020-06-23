//import 'global.js';

class Player{
  
  constructor(image, speed){
    this.image = image;
    this.spriteWalk = this.packSprite(220,270, 4, 4);
    this.iFrame = 0;
    this.time = 0;
    this.speed = speed;
  }

  show(){
    image(
      this.image,
      0,
      height - 145,
      110, 
      135,
      this.spriteWalk[this.iFrame][0],
      this.spriteWalk[this.iFrame][1],
      220, 
      270
    );

    this.walk();
  }

  walk(){
    this.time++;
    if(this.time >= this.speed){
      this.time = 0;
      this.iFrame++;
      if(this.iFrame >= this.spriteWalk.length - 1){
        this.iFrame = 0;
      }
    }
  }

  packSprite(width, height, xLength, yLength){
    var arraySprite = [];
    for(var x = 0, w = 0, h = 0; x < xLength; x++){
      for(var y = 0; y < yLength; y++){
        arraySprite.push([w,h]);
        h = h + height;
      }
      w = w + width;
      h = 0;
    }
    return arraySprite;
  }

}

