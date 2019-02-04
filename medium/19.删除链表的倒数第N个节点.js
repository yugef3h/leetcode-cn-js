/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点
 * 
 * 输入：给定一个链表: 1->2->3->4->5, 和 n = 2
 * 输出：1->2->3->5
 */

// 双指针
var removeNthFromEnd = function(head, n) {
  let node = new NodeList(0)
  node.next = head
  let left = node, right = node
  let step = n+1
  while(step--) {
    right = right.next
    if (step > 1 && right === null) {
      return node.next
    }
  }
  // 技巧就是：right 走完剩余步数，相当于 left 走到目标前一位，画图会更清晰。
  while(right) {
    right = right.next
    left = right.next
  }
  left.next = left.next.next
  return node.next
}