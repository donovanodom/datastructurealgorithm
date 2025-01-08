/**
 * @param {string[]} words
 * @return {number}
 */
const countPrefixSuffixPairs = function(words) {
  let count = 0
  for(let i = 0; i < words.length; i++){
    for(let j = i + 1; j < words.length; j++){
      if(isPrefixAndSuffix(words[i], words[j])) count++
    }
  }
  return count
};

const isPrefixAndSuffix = (word1, word2) => {
  const len1 = word1.length, len2 = word2.length
  if(len1 > len2 || word1 != word2.slice(0,len1) || word1 != word2.slice(len2 - len1)) return false
  return true
}