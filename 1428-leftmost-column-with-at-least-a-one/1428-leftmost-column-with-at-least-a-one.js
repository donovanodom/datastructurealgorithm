/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
const leftMostColumnWithOne = function(binaryMatrix) {
  const [rows, cols] = binaryMatrix.dimensions()
  let row = 0, min = Infinity, eliminated = new Set()
  for(let i = 0; i < rows; i++){
    if(binaryMatrix.get(i, cols - 1) == 0) eliminated.add(i)
  }
  while(row < rows){
    if(!eliminated.has(row)){
      min = Math.min(min, findLeft(row, cols, binaryMatrix, min))
    }
    row++
  }
  return min == Infinity ? - 1 : min
};

const findLeft = (row, length, binaryMatrix, min) => {
  let start = 0;
  let end = length - 1;
  while (start <= end) {
    if(start > min) break
    let mid = Math.floor((start + end) / 2)
    const left = binaryMatrix.get(row, mid - 1), right = binaryMatrix.get(row, mid)
    if (left == 0 && right == 1) {
      return mid;
    }
    if (binaryMatrix.get(row, start) < right) {
      end = mid - 1;
    } else if(right == 1){
      return start
    }else{
      start = mid + 1;
    }
  }
  return Infinity;
}