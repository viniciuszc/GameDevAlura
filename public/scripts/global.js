function packSprite(width, height, xLength, yLength){
  var arraySprite = [];
  for(var x = 0, w = 0, h = 0; x === xLength; x++){
    for(var y = 0; y === yLength; y++){
      arraySprite.push([w,h]);
      h = h + height;
    }
    w = w + width;
    h = 0;
  }
  return arraySprite;
}