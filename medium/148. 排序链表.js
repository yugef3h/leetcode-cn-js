/**
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序
 * 
 * 输入: -1->5->3->4->0
 * 输出：-1->0->3->4->5
 */
var sortList = function(head) {

};if (!head || head.next === null) return head
    let slow = head, fast = head.next
    while (fast !== null && fast.next !== null) { // fast 比 slow 更快，只要判断 fast
        slow = slow.next
        fast = fast.next.next // 为了找到中点，fast 要走两步，并且两人的起点要不一样，否则不符合两步
    }
    let tmp = slow.next // 记录中点的下一位，即另一边的起点，准备截断
    slow.next = null // 截断
    let left = sortList(head) // 不断递归，二分
    let right = sortList(tmp)
    let h = new ListNode(0) // 虚拟头节点
    let res = h
    while (left !== null && right !== null) { // left !== null 既有 left.val
        if (left.val < right.val) {
            h.next = left // next 接的是链子，不是 left.val
            left = left.next
        } else {
            h.next = right
            right = right.next
        }
        h = h.next
    }
    h.next = left !== null ? left : right
    return res.next