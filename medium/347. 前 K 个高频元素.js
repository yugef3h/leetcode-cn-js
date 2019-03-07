/**
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素
 * 
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 * 
 * 输入: nums = [1], k = 1
 * 输出: [1]
 */
var topKFrequent = function(nums, k) {
  let res = []
  let map = {}
  nums.forEach(function(v) {
    if (map[v]) {
      map[v] = map[v] + 1
    } else {
      map[v] = 1
    }
  })
  let arr = Object.keys(map).sort(function(a, b) {
    return map[b]-map[a]
  })
  for (let i=0; i<k; i++) {
    res.push(arr[i])
  }
  return res
}