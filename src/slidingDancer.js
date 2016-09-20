var MakeSlidingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.apply(this, arguments);
  this.timeBetweenSteps = 50;
  this.top = top;
  this.left = left;
  this.vx = (Math.random() - .5) * 10;
  this.vy = (Math.random() - .5) * 10;
};

MakeSlidingDancer.prototype = Object.create(MakeDancer.prototype);
MakeSlidingDancer.prototype.constructor = MakeSlidingDancer;

var oldStep = MakeDancer.prototype.step;

MakeSlidingDancer.prototype.step = function() {
  var height = $('body').height();
  var width = $('body').width();


  this.top += this.vy;
  this.left += this.vx;
  this.setPosition(this.top, this.left);
  oldStep.call(this);
  // this.$node.toggle();
};