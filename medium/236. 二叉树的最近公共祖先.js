/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先
 * 
 * 输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出: 3
 * 
 * 解释: 节点 5 和节点 1 的最近公共祖先是节点 3
 */

var lowestCommonAncestor = function(root, p, q) {
  // root === p 不论 q 的位置在左还是右子树，都以 p 为准，即 root
  if (!root || root === p || root === q) return root
  // 左树递归
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  // 一边不存在答案就在另一边，两边都不存在或者说两边都存在，答案就是 root
  if (!left) {
    return right
  } else if (!right) {
    return left
  }
  return root
}