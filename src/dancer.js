var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};



MakeDancer.prototype.step = function() {
  var holder = this.step.bind(this);
  console.log(holder);
  console.log(this.timeBetweenSteps);
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