/**
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树
 * 节点的左子树只包含小于当前节点的数
 * 节点的右子树只包含大于当前节点的数
 * 所有左子树和右子树自身必须也是二叉搜索树
 * 
 * 输入为: [5,1,4,null,null,3,6]
 * 根节点的值为 5 ，但是其右子节点值为 4 ，false
 */

var isValidBST = function(root) {
  if (!root) return true // 注意这个是二叉树，不是数组，所以没有什么 root.length
  let max = Number.MAX_SAFE_INTEGER,
  min = Number.MIN_SAFE_INTEGER,
  stack = [root]
  root.max = max
  root.min = min
  while(stack.length) {
    let node = stack.pop()
    // node.val 用来比较因为它可能表示左中右的值，同时比较的也是 node 上  max、min
    if (node.val <= node.min || node.val >= node.max) return false
    if (node.left) {
      stack.push(node.left)
      node.left.max = node.val
      node.left.min = node.min
    }
    if (node.right) {
      stack.push(node.right)
      node.right.max = node.max
      node.right.min = node.val
    }
  }
  return true
}