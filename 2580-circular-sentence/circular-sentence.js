const isCircularSentence = function(sentence) {
  if(sentence[0] !== sentence[sentence.length - 1]) return false
  const arr = sentence.split(' ')
  for(let i = 1; i < arr.length; i++){
    if(arr[i][0] != arr[i - 1][arr[i - 1].length - 1]) return false
  }
  return true
}