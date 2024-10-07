const groupStrings = function(strings) {
  const map = {}
  for(const s of strings){
    const key = getSeq(s)
    if(!map[key]) map[key] = []
    map[key].push(s)
  }
  return Object.values(map)
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