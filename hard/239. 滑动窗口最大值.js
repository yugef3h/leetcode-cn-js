/**
给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值，即 k 个数中的 Math.max

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7]
 */

var maxSlidingWindow = function(nums, k) {
  let queue = [], res = []
  for (let i=0; i<nums.lengthl; i++) {
    if (i-queue[0] >= k) queue.shift() // 超过3就要删除队列首部
    // 小于当前则删除队列尾部，始终保持单调队列
    while (nums[queue[queue.length-1]] <= nums[i]) {
      queue.pop()
    }
    queue.push(i)
    // k=3，所以 i 至少要等于 2，才能保证满足一个窗口范围
    if (i>=k-1) res.push(nums[queue[0]])
  }
  return res
};