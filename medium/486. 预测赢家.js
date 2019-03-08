/**
给定一个表示分数的非负整数数组。 玩家 1 从数组任意一端拿取一个分数，随后玩家 2 继续从剩余数组任意一端拿取分数，然后玩家 1 拿，…… 。每次一个玩家只能拿取一个分数，分数被拿取之后不再可取。直到没有剩余分数可取时游戏结束。最终获得分数总和最多的玩家获胜。

给定一个表示分数的数组，预测玩家1是否会成为赢家。你可以假设每个玩家的玩法都会使他的分数最大化

输入：[1, 5, 2]
输出：False

输入：[1, 5, 233, 7]
输出：True
 */

// 动态规划
var PredictTheWinner = function(nums) {
  let len = nums.length
  let dp = Array(len).fill(0).map(() => Array(len).fill(0))
  // base case 斜着的 0,0  1,1  2,2 ... 其中 0,0 表示 index=0 的值，1,1 表位置 index=1 的值，len = 1
  for (let k=0; k<len; k++) {
      dp[k][k] = nums[k] // 联系上下，由此推测里面存的是先手减去后手的答案，那么大于零则先手胜。
  }
  // 除去 base case 的
  // 0,1 1,2 2,3...    0,2 1,3 2,4...    0,3 1,4 2,5...
  // 结果二维图刚好是反斜杠方向斜着计算，刚好能用初始化的 dp[k][k] 辅助  https://juejin.im/post/6844903916908331015#heading-1
  for (let end=1; end<len; end++) {
      for (let i=0, j=end; j<len; j++, i++) {
          // 先手取左边，则减去后手 [i+1][j]
          // 先手取右边，则减去后手 [i][j-1]
          // 化为子问题
          dp[i][j] = Math.max(nums[i]-dp[i+1][j], nums[j]-dp[i][j-1])
      }
  }
  return dp[0][len-1] >= 0
};