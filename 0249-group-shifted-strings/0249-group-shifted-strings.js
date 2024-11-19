const groupStrings = function(strings) {
  
  // initialize a new Map to hold equal sequences
  const map = new Map()
  
  // add each string to the array of its sequence
  for(const s of strings){
    const key = getSeq(s)
    if(!map.has(key)) map.set(key, [])
    map.get(key).push(s)
  }
  
  // return the values of the arrays as an array
  return Array.from(map.values())
}

const getSeq = (str) => {
  
  // start the sequence with 1 and add the difference
  // between each character ie. f - a = 6 - 1
  let shift = ''
  for(let i = 1; i < str.length; i++){
    let diff = str.charCodeAt(i) - str.charCodeAt(i - 1)
    
    // if our difference is less than zero, add 26 to it
    // for cases going backwards, a - f = 1 - 6 
    // append the difference to our sequence string
    if(diff < 0) diff += 26
    shift += '-' + diff
  }
  
  // return the sequence to be used for its key
  return shift
}