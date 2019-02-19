/**
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字
 * 
 * 输入: 1->2->3->3->4->4->5
 * 1->2->5
 */
var deleteDuplicates = function(head) {
  if (!head || head.next === null) return head
  // 哨兵解决边界问题
  let dummy = new ListNode(0)
  dummy.next = head
  let pre = dummy, cur = dummy.next
  while(cur) {
    while(cur.next && cur.val === cur.next.val) {
      cur = cur.next
    }
    if (pre.next === cur) {
      pre = pre.next
    } else {
      pre.next = cur.next // 用连接来跳过！！！！ pre.next
    }
    cur = cur.next
  }
  return dummy.next
}