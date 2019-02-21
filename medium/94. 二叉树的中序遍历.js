/**
 * 给定一个二叉树，返回它的中序遍历
 * 
 * 输入: [1,null,2,3]
 * 输出: [1,3,2]
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return []
  let stack = [], res = [], p = root
  while (stack.length || p) {
    while (p) { // 不断将左节点推入栈
      stack.push(p)
      p = p.left
    }
    // 没有 right 就直接 pop
    let node = stack.pop()
    res.push(node.val)
    p = node.right // 注意这里！
  }

  return res
};