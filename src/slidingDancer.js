var MakeSlidingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.apply(this, arguments);
  this.timeBetweenSteps = 50;
  this.vx = (Math.random() - .5) * 9;
  this.vy = (Math.random() - .5) * 9;
};

MakeSlidingDancer.prototype = Object.create(MakeDancer.prototype);
MakeSlidingDancer.prototype.constructor = MakeSlidingDancer;

var oldStep = MakeDancer.prototype.step;

MakeSlidingDancer.prototype.step = function() {
  //bounce if too high or too low
  if (this.top > this.height * .85 || this.top < this.height * .45) {
    this.vy *= -1;
  }
  //bounce if too much to the left or right
  if (this.left > this.width * .8 || this.left < this.width * .1 ) {
    this.vx *= -1;
  }

  this.top += this.vy;
  this.left += this.vx;
  this.setPosition(this.top, this.left);
  this.$node.css('zIndex', Math.floor(this.top));
  oldStep.call(this);
};