/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个位置。
 * 
 * 输入: [2,3,1,1,4]
 * 输出: true
 * 
 * 输入: [3,2,1,0,4]
 * 输出: false
 * 解释: 你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let max = 0
  for (let i=0; i<nums.length; i++) {
    if (max < i) return false // 只有一种情况，max < i，就是 nums[i] = 0
    max = Math.max(nums[i] + i, max) // nums[i]+i 表示当前这个位置能跳出去多远，额，能跳 nums[i]远，加上原来的 i 距离，即从初始位置到 '多远' 的距离
  }
  return max >= nums.length-1
};