/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

注意：你不能在买入股票前卖出股票

输入: [7,1,5,3,6,4]
输出: 5
解释: 6 减 1
*/

var maxProfit = function(prices) {
  let profit = Number.MAX_SAFE_INTEGER
  let max = 0
  for (let i=0; i<prices.length; i++) {
    if (prices[i] < profit) {
      profit = prices[i]
    } else {
      max = Math.max(max, prices[i] - profit)
    }
  }
  return max
}
