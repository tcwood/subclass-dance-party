var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.height = $('body').height();
  this.width = $('body').width();
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.vx = 0;
  this.vy = 0;
  this.top = top;
  this.left = left;
};

MakeDancer.prototype.step = function() {
  var holder = this.step.bind(this);
  setTimeout(function() {
    holder();
  }, this.timeBetweenSteps);
};


MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};