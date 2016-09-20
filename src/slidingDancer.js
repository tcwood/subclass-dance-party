var MakeSlidingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.apply(this, arguments);
  this.timeBetweenSteps = 50;
  this.vx = (Math.random() - .5) * 10;
  this.vy = (Math.random() - .5) * 10;
};

MakeSlidingDancer.prototype = Object.create(MakeDancer.prototype);
MakeSlidingDancer.prototype.constructor = MakeSlidingDancer;

var oldStep = MakeDancer.prototype.step;

MakeSlidingDancer.prototype.step = function() {
  if (this.top > this.height * .99 || this.top < this.height * .01) {
    this.vy *= -1;
  }
  if (this.left > this.width * .99 || this.left < this.width * .01 ) {
    this.vx *= -1;
  }





  this.top += this.vy;
  this.left += this.vx;
  this.setPosition(this.top, this.left);
  oldStep.call(this);
  // this.$node.toggle();
};