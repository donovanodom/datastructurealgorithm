const longestCommonPrefix = function(strs) {
  let pre = strs.reduce((acc, cur) => {
    return acc.length > cur.length ? cur : acc
  }, strs[0])
  let len = pre.length
  for(const str of strs){
    let i = 0
    while(i < len && pre[i] == str[i]) i++
    len = Math.min(i, len)
  }
  return pre.substring(0,len)
};