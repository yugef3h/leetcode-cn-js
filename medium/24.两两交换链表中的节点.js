/**
 * 给定 1->2->3->4, 你应该返回 2->1->4->3
 */

var swapPairs = function(head) {
  if (head === null || head.next === null) return head
  let p = dummyHead = new ListNode()
  dummyHead.next = head
  let node1, node2
  while ((node1 = p.next) && (node2 = p.next.next)) {
    node1.next = node2.next // 连接第3个
    node2.next = node1 // 2到前面，连接调后的1
    p.next = node2 // 将头节点连接到 2
    p = node1 // 更新 p，右移到下一对前
  }
  return dummyHead.next
}