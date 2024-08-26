const frequencySort = function(s) {
  const map = {}, order = {}, seen = new Set()
  let str = ''
  for(const c of s){
    if(!map[c]) map[c] = 0
    map[c]++
  }
  for(const c of s){
    if(!order[map[c]]) order[map[c]] = []
    if(!seen.has(c)) {
      seen.add(c)
      order[map[c]].push(c)
    }
  }
  Object.keys(order).forEach((key) => {
    for(const c of order[key]){
      str = c.repeat(key) + str
    }
  })
  return str
};