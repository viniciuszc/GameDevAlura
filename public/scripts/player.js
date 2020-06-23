
class Player {

  constructor(image, speed) {
    this.image = image;
    this.spriteWalk = this.packSprite(220, 270, 4, 4);
    this.iFrame = 0;
    this.timeCount = 0;
    this.speed = speed;
  }

  show() {
    image(
      this.image,
      40,
      height - 280 * 0.7,
      220 * 0.7,
      270 * 0.7,
      this.spriteWalk[this.iFrame][0],
      this.spriteWalk[this.iFrame][1],
      220,
      270
    );

    this.walk();
  }

  walk() {
    this.timeCount++;
    if (this.timeCount >= this.speed) {
      this.timeCount = 0;
      this.iFrame++;
      if (this.iFrame >= this.spriteWalk.length - 1) {
        this.iFrame = 0;
      }
    }
  }

  packSprite(width, height, xLength, yLength) {
    var arraySprite = [];
    for (var y = 0, w = 0, h = 0; y < yLength; y++) {
      for (var x = 0; x < xLength; x++) {
        arraySprite.push([w, h]);
        w = w + width;
      }
      h = h + height;
      w = 0;
    }
    return arraySprite;
  }

}

