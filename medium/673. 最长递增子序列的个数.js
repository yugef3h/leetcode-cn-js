/**
 * 给定一个未排序的整数数组，找到最长递增子序列的个数。
 * 
 * 输入: [1,3,5,4,7]
 * 输出: 2
 * 
 * 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]
 * 输入: [2,2,2,2,2]
 * 输出: 5
 * 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
 */

var findNumberOfLIS = function(nums) {
  let n = nums.length
  if (n <= 1) return n
  let dp = new Array(n).fill(1), count = new Array(n).fill(1) // 至少为1
  let maxLen = 1
  for (let i=1; i<n; i++) {
      for (let j=0; j<i; j++) {
          if (nums[j] < nums[i]) { // 递增的
              if (dp[j] >= dp[i]) { // 这里判定要注意初始化时都为1，所以第一次比较会出现等于的情况
                  dp[i] = dp[j]+1
                  count[i] = count[j]
              } else if (dp[j]+1 === dp[i]) { // 这里也要注意：if 条件表明 > 1 次了
                  count[i] += count[j]
              }
          }
      }
      maxLen = Math.max(maxLen, dp[i])
  }
  let res = 0
  for (let i=0; i<n; i++) {
      if (dp[i] === maxLen) {
          res += count[i]
      }
  }
  return res
};