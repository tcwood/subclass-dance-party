var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

var oldStep = Object.create(MakeDancer.prototype.step);

MakeBlinkyDancer.prototype.step = function() {
  oldStep();
  this.$node.toggle();
};