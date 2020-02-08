/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (43.54%)
 * Likes:    332
 * Dislikes: 0
 * Total Accepted:    55.6K
 * Total Submissions: 127.3K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // 哨兵->a->b->c-d
    let ele = {
        next: head
    }
    let cur = ele
    while (cur.next) {
        if (cur.next.val == val) {
            cur.next = cur.next.next
        } else { // cur.next = head
            cur = cur.next
        }
    }
    return ele.next
};
// @lc code=end

