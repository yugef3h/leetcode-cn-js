/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列
 * 
 * 输入: [1,2,3]
 * 输出 数组9种变化...
 */

var permute = function(nums) {
  const swap = (arr, p ,q) => {
    [arr[p], arr[q]] = [arr[q], arr[p]]
  }
  const create = (arr, p ,q, res) => {
    if (p === q) {
      res.push([...arr])
    } else {
      for (let i=p; i<=q; i++) {
        swap(arr, i, p)
        create(arr, p+1, q, res)
        swap(arr, i, p)
      }
    }
  }
  let res= []
  create(nums, 0, nums.length-1, res)
  return res
}