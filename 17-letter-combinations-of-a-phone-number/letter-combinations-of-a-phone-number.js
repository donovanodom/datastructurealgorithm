/**
 * @param {string} digits
 * @return {string[]}
 */

const map = {
  '2': ['a','b','c'],
  '3': ['d','e','f'],
  '4': ['g','h','i'],
  '5': ['j','k','l'],
  '6': ['m','n','o'],
  '7': ['p','q','r','s'],
  '8': ['t','u','v'],
  '9': ['w','x','y','z']
}
const letterCombinations = function(digits) {
  if(digits.length == 0) return []
  const ans = []
  const traverse = (i, str) => {
    if(i == digits.length){
      ans.push(str)
      return
    }
    for(const char of map[digits[i]]){
      traverse(i + 1, str + char)
    }
  }
  traverse(0,'')
  return ans
};

