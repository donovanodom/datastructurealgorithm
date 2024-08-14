/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  if(s.length != t.length) return false
  const arr = Array(26).fill(0)
  for(const char of s){
    arr[char.charCodeAt(0) - 97]++
  }
  for(const char of t){
    arr[char.charCodeAt(0) - 97]--
  }
  let ans = true
  for(const num of arr){
    if(num) ans = false
  }
  return ans
};