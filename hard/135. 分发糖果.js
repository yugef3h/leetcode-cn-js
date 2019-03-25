/**
 * 老师想给孩子们分发糖果，有 N 个孩子站成了一条直线
 * 老师会根据每个孩子的表现，预先给他们评分
 * 你需要按照以下要求，帮助老师给这些孩子分发糖果：
 * 每个孩子至少分配到 1 个糖果
 * 相邻的孩子中，评分高的孩子必须获得更多的糖果
 * 
 * [1,0,2]
 * 5
 * 你可以分别给这三个孩子分发 2、1、2 颗糖果
 * 
 * 输入: [1,2,2]
 * 输出: 4
 * 解释: 你可以分别给这三个孩子分发 1、2、1 颗糖果。
 * [1,2,1] ?
 */

var candy = function(ratings) {
  let len = ratings.length
  let arr = new Array(len).fill(0)
  for (let i=1; i<len; i++) {
    if (ratings[i] > ratings[i-1]) {
      arr[i] = arr[i-1] + 1
    }
  }
  for (let j=len-2; j>=0; j--) {
    // 贪心：局部最优解
    // 上面从左到右，考虑了 i 比 i-1 大的情况需要加1
    // 现在从右到左，考虑 i 比 i-1 小的情况，但 arr 却不满足的情况
    if (ratings[j] > ratings[j+1] && arr[j] <= arr[j+1]) {
      arr[j] = arr[j+1] + 1
    }
  }
  return arr.reduce((a, b) => {
    return a+b
  }, 0) + len
}