/**
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素
 * 
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 * 
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 * 
 * 解题思路：排序后取值，考察的是手写快排？
 */
var findKthLargest = function(nums, k) {
  // 二分快排，左右归类
  const fast = (nums) => {
    if (nums.length <= 1) return nums
    let mid = Math.floor(nums.length/2)
    let midValue = nums.splice(mid, 1)[0] // 这一步重要
    let left = [], right = []
    for (let i=0; i<nums.length; i++) {
      if (nums[i] < midValue) {
        left.push(nums[i])
      } else {
        right.push(nums[i])
      }
    }
    // 递归
    return fast(left).concat([midValue], fast(right))
  }
  nums = fast(nums) // 从小到大
  return nums[nums.length-k]
}