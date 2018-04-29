class Spiral {

  static get inputProperties() { return ['--sWidth', '--sHeight', '--bkCol']; }

  paint(ctx, geom, properties) {

    var propWidth = parseInt(properties.get('--sWidth').toString()),
      propHeight = parseInt(properties.get('--sHeight').toString()),
      bkCol = properties.get('--bkCol').toString();

    console.log(geom);

    var spiralStart = 10,
      spiralSize = 4,
      smoothness = 1;

    const sin = Math.sin,
          cos = Math.cos,
          startX = geom.width/4,
          startY = geom.height/4;

    // TO DO: test for bigger screens
    const k = 360/1000;
    function getCol(val) {
      return k*val;
    }

    ctx.strokeStyle = 'hsla('+getCol(propWidth)+', 70%, 80%, 1)';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'hsla('+getCol(propHeight)+', 60%, 40%, 0.5)';
    // start
    ctx.beginPath();
    // first point
    ctx.moveTo(startX, startY);

    for (let i=0; i<300; i++) {
      let angle = i/smoothness;
      let x = (spiralStart+spiralSize*angle)*cos(angle) + startX;
      let y = (spiralStart+spiralSize*angle)*sin(angle) + startY;

      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.fill();
    }

      ctx.strokeStyle = bkCol;
      ctx.closePath();

  }
}

registerPaint('spiral', Spiral);

