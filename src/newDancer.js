var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');

  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
  setTimeout(this.step, timeBetweenSteps);
};

MakeDancer.prototype.set = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};