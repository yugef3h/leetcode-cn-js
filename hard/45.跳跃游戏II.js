/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 
 * 解释：从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置
 */

var jump = function(nums) {
  let res = 0, end = 0, maxPos = 0
  for (let i=0; i<nums.length-1; i++) {
    maxPos = Math.max(maxPos, nums[i] + i)
    if (end === i) {
      end = maxPos // 更新边界
      res++
    }
  }
  return res
}