/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图
 * 计算按此排列的柱子，下雨之后能接多少雨水
 * 
 * 输入 [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出 6
 */
var trap = function(height) {
  let res = 0
  let left = 0, right = height.length-1
  let left_max = 0, right_max = 0
  while(left < right) {
      if (height[left] < height[right]) {
          if (height[left] > left_max) {
              left_max = height[left]
          } else {
              res += left_max - height[left]
          }
          left++
      } else {
          if (height[right] > right_max) {
              right_max = height[right]
          } else {
              res += right_max - height[right]
          }
          right--
      }
  }
  return res
};