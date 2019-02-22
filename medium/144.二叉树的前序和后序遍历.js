/**
 * [1,4,3,2]
 */

// 推荐方法二：通用
var preorderTraversal = function(root) {
  if (!root) return []
  let stack = [root], res = []
  while(stack.length) {
      let node = stack.pop()
      res.push(node.val)
      // 注意用 stack 解时先 push right
      if (node.right) stack.push(node.right)
      if (node.left) stack.push(node.left)
  }
  return res
};
var postorderTraversal = function(root) {
  let res = []
  let endfn = (root) => {
      if (!root) return []
      if (root.left) endfn(root.left)
      if (root.right) endfn(root.right)
      res.push(root.val)
  }
  endfn(root)
  return res
};