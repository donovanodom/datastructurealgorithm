const customSortString = function(order, s) {
  const map = {}, set = new Set()
  let start = '', end = ''
  for(const char of order){
    set.add(char)
  }
  for(const char of s){
    if(!map[char] && set.has(char)) map[char] = 0
    if(map[char] || map[char] == 0){
      map[char]++
    }else{
      end += char
    }
  }
  for(const char of order){
    if(map[char]){
      start = start + char.repeat(map[char])
      map[char] = 0
    } 
  }
  return start + end
}