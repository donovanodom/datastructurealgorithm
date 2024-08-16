const maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a,b) => b[1] - a[1])
  let totalUnits = 0, remaining = truckSize
  for(const [boxes,units] of boxTypes){
    let take = boxes <= remaining ? boxes : remaining
    totalUnits += take * units
    remaining -= take
    if(remaining == 0) return totalUnits 
  }
  return totalUnits
};