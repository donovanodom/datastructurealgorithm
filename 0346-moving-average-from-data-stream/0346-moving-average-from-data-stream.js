const MovingAverage = function(size) {
  this.size = size
  this.arr = []
  this.sum = 0
};

MovingAverage.prototype.next = function(val) {
  let diff = 0
  if(this.arr.length == this.size) diff = this.arr.shift()
  this.arr.push(val)
  this.sum += val - diff
  return this.sum / this.arr.length
};
