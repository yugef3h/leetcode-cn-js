/**
给定一个非空二叉树，返回其最大路径和。
本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。

输入: [1,2,3]
输出: 6

输入: [-10,9,20,null,null,15,7]
输出: 42
 */
var maxPathSum = function(root) {
  let max = Number.MIN_SAFE_INTEGER
  let fn = (root) => {
    if (!root) return 0
    let left = Math.max(fn(root.left), 0)
    let right = Math.max(fn(root.right), 0)
    let cur = left + right + root.val
    if (cur > max) max = cur
    return Math.max(left, right) + root.val // 看公式上面的 left 是以左子节点的最大值，其中左子节点也包含其中，在 return 中即 root.val
  }
  fn(root)
  return max
}
