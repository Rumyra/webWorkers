// An Archimedean spiral is a spiral with polar equation
// r=atheta^(1/n),
//where r is the radial distance, theta is the polar angle, and n is a constant which determines how tightly the spiral is "wrapped."



class Shape {

  // inputProperties returns a list of CSS properties that this paint function gets access to
  // I don't understand this bit but I missed it and was stuck for a little bit
  static get inputProperties() { return ['--star-colour','--star-scale']; }

  paint(ctx, geom, properties) {

    var starColour = properties.get('--star-colour') || 'white';
    starColour = starColour.toString();

    var starSize = properties.get('--star-scale') || 1;
    starSize = parseInt( starSize.toString() );

    let x = geom.width/2;
    let y = geom.height/2;

    var wWidth = geom.width,
      wHeight = geom.height,
      spiralStart = 10,
      spiralSize = 4;

    // the star is roughly 200 x 200 pixels without scale, so I'm going to start top left depending on scale
    let startX = x - (100*starSize);
    let startY = y - (100*starSize);

    ctx.translate(startX, startY);
    this.drawStar(ctx, starColour, starSize);

  }

  drawStar(ctx, colour, size) {

    let scale = size || 1;

    ctx.save();
    ctx.scale(scale, scale);
    ctx.fillStyle = colour || 'white';
    ctx.beginPath();
    ctx.moveTo(86.36,131.818);
    ctx.lineTo(37.659,167.531);
    ctx.bezierCurveTo(31.817999999999998,171.425,27.268,174.022,21.427,174.022);
    ctx.bezierCurveTo(9.74,174.022,0,163.632,0,151.961);
    ctx.bezierCurveTo(0,142.204,7.793,135.062,14.936,131.818);
    ctx.lineTo(72.076,107.14200000000001);
    ctx.lineTo(14.935999999999993,81.81500000000001);
    ctx.bezierCurveTo(7.17,78.572,0,71.43,0,61.69);
    ctx.bezierCurveTo(0,50.001999999999995,10.391,40.262,22.062,40.262);
    ctx.bezierCurveTo(27.909000000000002,40.262,31.803,42.209,37.643,46.753);
    ctx.lineTo(86.344,82.46600000000001);
    ctx.lineTo(79.869,24.67500000000001);
    ctx.bezierCurveTo(77.922,11.03,87.011,0,100,0);
    ctx.bezierCurveTo(112.989,0,122.062,10.392,120.131,24.025);
    ctx.lineTo(113.617,82.46600000000001);
    ctx.lineTo(162.318,46.75300000000001);
    ctx.bezierCurveTo(168.181,42.20900000000001,172.72500000000002,40.26200000000001,178.572,40.26200000000001);
    ctx.bezierCurveTo(190.363,40.36600000000001,199.895,49.89900000000001,199.999,61.69000000000001);
    ctx.bezierCurveTo(199.999,72.08100000000002,192.857,78.57200000000002,185.063,81.82100000000001);
    ctx.lineTo(127.91799999999998,107.14200000000001);
    ctx.lineTo(185.063,131.818);
    ctx.bezierCurveTo(192.857,135.061,199.999,142.204,199.999,152.59400000000002);
    ctx.bezierCurveTo(199.999,164.282,189.608,174.02200000000002,177.93699999999998,174.02200000000002);
    ctx.bezierCurveTo(172.74099999999999,174.02200000000002,168.19699999999997,171.424,162.35099999999997,167.531);
    ctx.lineTo(113.61699999999996,131.818);
    ctx.lineTo(120.10799999999996,189.609);
    ctx.bezierCurveTo(122.05499999999996,203.243,112.96599999999997,214.285,99.97699999999996,214.285);
    ctx.bezierCurveTo(86.98799999999996,214.285,77.91499999999996,203.894,79.84599999999996,190.26);
    ctx.lineTo(86.36,131.818);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

// Register our class under a specific name
registerPaint('shape', Shape);

