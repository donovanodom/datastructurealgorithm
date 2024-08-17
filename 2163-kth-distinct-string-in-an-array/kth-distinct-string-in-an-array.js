const kthDistinct = function(arr, k) {
   const map = {}
   for(const s of arr){
     if(!map[s]) map[s] = 0
     map[s]++
   }
  for(const s of arr){
    if(map[s] == 1) k--
    if(k == 0) return s
  }
  return ''
};