/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.integer = k
  this.stream = nums.sort((a,b) => b - a)
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if(this.stream.length == 0){
    this.stream.push(val)
  }else{
    for(let i = 0; i < this.stream.length; i++){
      if(val > this.stream[i]){
        this.stream.splice(i, 0, val)
        break
      }else if(i == this.stream.length - 1){
        this.stream.push(val)
        break
      }
    }
  }
  return this.stream[this.integer - 1]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */