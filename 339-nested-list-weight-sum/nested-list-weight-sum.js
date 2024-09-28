const depthSum = function(nestedList, depth = 1, sum = 0) {
  for(let i = 0; i < nestedList.length; i++){
    if(!nestedList[i].isInteger()){
      sum += depthSum(nestedList[i].getList(), depth + 1, 0)
    }else{
      sum += nestedList[i].getInteger() * depth
    }
  }  
  return sum
}
