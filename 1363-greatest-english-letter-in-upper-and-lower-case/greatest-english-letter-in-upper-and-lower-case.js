const greatestLetter = function(s) {
   let max = '', lower = new Set()
   for(const char of s){
     if(char == char.toLowerCase()) lower.add(char)
   }
   for(const char of s){
     if(char != char.toLowerCase() && lower.has(char.toLowerCase())){
       if(max && max.charCodeAt(0) < char.charCodeAt(0)){
         max = char
       }else if(!max){
         max = char
       }
     }
   }
  return max
}