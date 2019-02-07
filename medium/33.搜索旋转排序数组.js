/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1
 * 你的算法时间复杂度必须是 O(log n) 级别
 * 注意: 假如直接遍历 O(n) 不符合题意
 * 
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 */

// 二分查找？
var search = function(nums, target) {
  if (!nums || nums.length===0) return -1
  let start=0, end=nums.length-1, mid
  while(start<=end) {
    mid = Math.ceil((start+end)/2)
    if (nums[start]===target) return start
    if (nums[mid]===target) return mid
    if (nums[end]===target) return end
    if (nums[start] < nums[mid]) { // 左边有序
      if (nums[start] < target && target < nums[mid]) {
        end = mid-1
      } else {
        start = mid+1
      }
    } else { // 右边无序
      if (nums[mid] < target && target < nums[end]) {
        start = mid+1
      } else {
        end = mid-1
      }
    }
  }
  return -1
}