/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 */
var coinChange = function(coins, amount) {
  if (amount === 0) return 0
  let dp = new Array(amount+1).fill(Number.MAX_SAFE_INTEGER)
  dp[0] = 0
  for (let i=1; i<amount+1; i++) {
    for (let j=0; j<coins.length; j++) {
      // 只有 i - coins[j] >= 0 才能有空间减
      if (i>=coins[j]) {
        // 最优子问题：最小 = 最最小 + 1， +1 表示当前减去的这枚硬币数量
        dp[i] = Math.min(dp[i], dp[i-coins[j]]+1)
      }
    }
  }
  return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount]
}