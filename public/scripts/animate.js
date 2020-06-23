class Animate{
  constructor(arraySprite, image, x, y, width, heigth, spriteWidh, spriteHeight){
    this.arraySprite = arraySprite;
    this.image = image;
    this.x = x;
    this.y = height - this.height + y;
    this.width = width;
    this.heigth = heigth;
    this.spriteWidh = spriteWidh;
    this.spriteHeight = spriteHeight;
    this.actualFrame = 0;
  }

  show() {
    image(
      this.image,
      this.x,
      this.y,
      this.width,
      this.height,
      this.spriteWalk[this.actualFrame][0],
      this.spriteWalk[this.actualFrame][1],
      this.spriteWidh,
      this.spriteHeight
    );

    this.animate();
  }

  animate(){
    this.actualFrame++;

    if(this.actualFrame >= this.arraySprite.length - 1){
      this.actualFrame = 0;
    }
  }
}