const customSortString = function(order, s) {
  const map = {}
  let start = '', end = ''
  for(const char of s){
    if(!map[char] && order.includes(char)) map[char] = 0
    if(map.hasOwnProperty(char)){
      map[char]++
    }else{
      end += char
    }
  }
  for(const char of order){
    if(map[char]){
      start += char.repeat(map[char])
      map[char] = 0
    }
  }
  return start + end
}