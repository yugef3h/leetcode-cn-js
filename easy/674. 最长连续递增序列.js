/**
 * 给定一个未经排序的整数数组，找到最长且连续的的递增序列，并返回该序列的长度。
 * 输入: [1,3,5,4,7]
 * 3
 * 最长连续递增序列是 [1,3,5], 长度为3
 */

var findLengthOfLCIS = function(nums) {
  let n = nums.length

  if (n === 0) return n
  let res=1, max = res
  for (let i=1; i<n; i++) {
    if (nums[i] > nums[i-1]) {
      res++
    } else {
      res = 1
    }
    max = Math.max(max, res)
  }
  return max
}