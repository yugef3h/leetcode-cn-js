/**
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序
 * 
 * 给你这个链表：1->2->3->4->5
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 */
var reverseKGroup = function(head, k) {
  var reverse = function(head, b) {
    if (head === null) return null
    let pre = null, cur=next=head
    while(cur !== b) {
      next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
  }
  if (head === null) return null
  let a = b = head
  for (let i=0; i<k; i++) {
    if (b === null) return head
    b = b.next
  }
  let newHead = reverse(a, b)
  a.next = reverseKGroup(b, k)
  return newHead
}