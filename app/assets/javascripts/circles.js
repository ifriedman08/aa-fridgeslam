(function () {
  if (typeof Circles === "undefined") {
    window.Circles = {};
  }

  window.dictionary = window.dictionary || [];

  $.ajax({
    url: '/api/dictionary',
    success: function (response) {
      window.dictionary = response;
    }
  });

  // $.ajax({
  //   url: 'api/dictionary',
  //   success: function (response) {
  //     window.dictionary = response;
  //   }
  // });

  var Circle = Circles.Circle = function (centerX, centerY, radius, color, word, font) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
    this.color = color;
    this.word = word;
    this.font = font;
  };


  Circle.randomCircle = function (maxX, maxY) {

    // var fonts = [
    //   'courier',
    //   'verdana',
    //   'georgia',
    // ];
    // var font = fonts[Math.floor(Math.random() * fonts.length)]
    var font = 'courier';

    var word = dictionary[Math.floor(Math.random()*dictionary.length)];
    var radius = (15 * word.length);
    return new Circle(
      maxX * Math.random(),
      maxY + radius,
      radius,
      Circle.randomColor(),
      word,
      font
    );
  };

  var HEX_DIGITS = "0123456789ABCDEF";
  Circle.randomColor = function () {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += HEX_DIGITS[Math.floor((Math.random() * 16))];
    }

    return color;
  };

  Circle.prototype.moveRandom = function (maxX, maxY) {
    var dy = - (Math.random() * 0.1);
    this.centerY = (this.centerY + (dy * this.radius) * 0.2);
  };

  Circle.prototype.render = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.centerX,
      this.centerY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
    ctx.fillStyle = "white";

    ctx.font = "35px " + this.font;
    ctx.fillText(this.word, this.centerX - (this.word.length * 10), this.centerY + 10);
  };
  var Game = Circles.Game = function (xDim, yDim) {
    this.xDim = xDim;
    this.yDim = yDim;

    this.circles = [];

    window.setInterval((function () {
      this.circles.push(
        Circles.Circle.randomCircle(xDim, yDim, 1)
      );
    }).bind(this), 1000);
  };
  Game.prototype.render = function (ctx) {
    ctx.clearRect(0, 0, this.xDim, this.yDim);

    this.circles.forEach(function (circle) {
      if (circle.centerY < - (circle.radius)) {
        this.circles.splice(this.circles.indexOf(circle), 1);
      }
      circle.render(ctx);
    }.bind(this));
  };

  Game.prototype.moveCircles = function () {
    var game = this;
    this.circles.forEach(function (circle) {
      circle.moveRandom(game.xDim, game.yDim);
    });
  };

  Game.prototype.start = function (canvasEl) {
    // get a 2d canvas drawing context. The canvas API lets us call
    // a `getContext` method on a canvas DOM element.
    var ctx = canvasEl.getContext("2d");

    window.setInterval((function () {
      this.moveCircles();
      this.render(ctx);
    }).bind(this), 1000 / 170);
  };
})();
