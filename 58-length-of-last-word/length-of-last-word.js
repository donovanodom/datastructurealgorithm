const lengthOfLastWord = function(s) {
  s = s.split(' ')
  let i = s.length - 1
  while(s[i] == '') i--
  return s[i].length
};