const firstUniqChar = function(s) {
  let map = {}
  for(const char of s){
    if(!map[char]) map[char] = 0
    map[char]++
  }
  for(let i = 0; i < s.length; i++){
    let char = s[i]
    if(map[char] == 1) return i
  }
  return -1
};