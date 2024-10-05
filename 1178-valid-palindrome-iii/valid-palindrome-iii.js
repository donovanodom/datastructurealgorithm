const isValidPalindrome = (s, k) => {
  let r = s.split('').reverse().join('')
  if(r == s) return true
  let dp = Array(s.length + 1).fill().map((x) => x = Array(s.length + 1).fill(0))
  for(let i = 0; i < s.length; i++){
    for(let j = 0; j < s.length; j++){          
      if(s[i] == r[j]) dp[i + 1][j + 1] = dp[i][j] + 1
      else dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j])
    }
  }
  return s.length - dp[s.length][s.length] <= k
}