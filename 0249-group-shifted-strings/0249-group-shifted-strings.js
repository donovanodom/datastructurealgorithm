const groupStrings = function(strings) {
  const map = new Map()
  for(const s of strings){
    const key = getSeq(s)
    if(!map.has(key)) map.set(key, [])
    map.get(key).push(s)
  }
  return Array.from(map.values())
}

const getSeq = (str) => {
  let shift = '1'
  for(let i = 1; i < str.length; i++){
    let sub = str.charCodeAt(i) - str.charCodeAt(i - 1)
    if(sub < 0) sub += 26
    shift += ',' + sub
  }
  return shift
}