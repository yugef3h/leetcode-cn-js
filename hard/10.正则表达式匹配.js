/**
给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配

'.' 匹配任意单个字符

'*' 匹配零个或多个前面的那一个元素
 */
// ？
var isMatch = function(s, p) {
  if (s === null || p === null) return false
  let m = s.length, n = p.length
  let dp = new Array(m+1).fill(0).map(() => new Array(n+1).fill(false))
  dp[0][0] = true
  for (let i=1; i<n; i++) {
    if (p[i] === '*') { // p[i] 抵消 p[i-1]，那么看 p[i-2]，即 dp[0][i-1]
      // 假如 dp[0][i-1] 为 false，则考虑另一种情况，但因为 s 此时为空，所以不予考虑。
      dp[0][i+1] = dp[0][i-1]
    }
  }
  for (let i=0; i<m; i++) {
    for (let j=0; j<n; j++) {
      // s.charAt(i) === p.charAt(j) || p.charAt(j) === '.'
      if (s.charAt(i) === p.charAt(j)) {
        dp[i+1][j+1] = dp[i][j]
      }
      if (p.charAt(j) === '.') {
        dp[i+1][j+1] = dp[i][j]
      }
      if (p.charAt(j) === '*') { // .* 是万能的，会产生 ..,...,.... and so on
        if (p[j-1] !== s[i] && p[j-1] !== '.') {
          dp[i+1][j+1] = dp[i+1][j-1]
        } else {
          dp[i+1][j+1] = (dp[i+1][j] || dp[i][j+1] || dp[i+1][j-1])
        }
      }
    }
  }
  return dp[m][n]
}