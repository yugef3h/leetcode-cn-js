/**
 * 一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色0、白色1、蓝色2顺序排列
 * 
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 */
// 思路两轮扫描，第2轮缩小范围
var sortColors = function(nums) {
  let left = 0, n = nums.length

  for (let i=0; i<n; i++) {
    if (nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]]
      left++
    }
  }
  let right = n-1
  for (let i=right; i>=left; i--) {
    if (nums[i] === 2) {
      [nums[right], nums[i]] = [nums[i], nums[right]]
      right--
    }
  }
}