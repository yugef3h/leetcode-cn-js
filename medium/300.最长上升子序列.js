/**
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 
 * 输入: [10,9,2,5,3,7,101,18]
 * 输出: 最长的上升子序列是 [2,3,7,101]，它的长度是 4
 */


// eg：[1,5,3,4,8]
// f(0) = 1
// f(1) = max(f(0)+1, self 1) = 2
// f(2) = max(f(0)+1, self 1) = 2
// f(3) = max(f(0)+1, f(2)+1, self 1) = 3
// f(4) = max(f(0)+1, f(1)+1, f(2)+1, f(3)+1, self 1) = 4
var lengthOfLIS = function(nums) {
  if (nums.length === 0) return 0
  let n = nums.length
  let dp = new Array(n).fill(0) // 存各个索引对应的长度
  dp[0] = 1
  let len = 1
  for (let i = 1; i<n; i++) {
      let res = 0
      for (let j=0; j<i; j++) {
          if (nums[j] < nums[i]) { // 只有比当前小的才算递增，这些小的进行 max
              res = Math.max(res, dp[j])
          }
      }
      dp[i] = res + 1 // dp[j] 的最大值 + 1 = dp[i]
      len = Math.max(len, dp[i])
  }
  return len
};