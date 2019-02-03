/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]
 * 输出：[[-1, 0, 1], [-1, -1, 2]]
 */

// 思路：0-nums[i] 与 nums[i+1]+nums[len-1] 之间的较量
var threeSum = function(nums) {
  nums.sort((a, b) => a-b)
  // 全正全负都没的搞
  if (nums[0] > 0 || nums[nums.length-1] < 0) return []
  let res = []
  for (let i=0; i<nums.length-2; i++) {
    // 过滤重复
    if (i > 0 && nums[i] === nums[i-1]) continue
    if (nums[i] > 0) break; // 当 nums.slice(i) 这个新的数组中第一个大于 0，类似特判
    let target = 0-nums[i], start = i+1, end = nums.length - 1
    while(start < end) {
      let cur = nums[start] + nums[end]
      if (target < cur) {
        end--
      } else if (target > cur) {
        start--
      } else {
        res.push([nums[i], nums[start], nums[end]])
        // 继续过滤重复
        while(start<end && nums[start] === nums[start+1]) start++
        while(start<end && nums[end] === nums[end-1]) end--
        start++
        end--
      }
    }
  }
  return res
}