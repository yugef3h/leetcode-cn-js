/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合
 */

var generateParenthesis = function(n) {
  if (n === 0) return []
  let res = []
  let dfs = function (left, right, cur) {
    if (left === 0 && right === 0) return res.push(cur)
    if (left > 0) dfs(left-1, right, cur+'(')
    if (right > left) { // right 多了就要用掉
      dfs(left, right-1, cur+')')
    }
  }
  dfs(n, n, '') // 左右两个括号的数量都是 n
  return res
}