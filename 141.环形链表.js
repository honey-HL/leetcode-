/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 *
 * https://leetcode-cn.com/problems/linked-list-cycle/description/
 *
 * algorithms
 * Easy (45.69%)
 * Likes:    465
 * Dislikes: 0
 * Total Accepted:    99.5K
 * Total Submissions: 217.8K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，判断链表中是否有环。
 * 
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * 
 * 
 * 
 * 示例 2：
 * 
 * 输入：head = [1,2], pos = 0
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * 
 * 
 * 
 * 示例 3：
 * 
 * 输入：head = [1], pos = -1
 * 输出：false
 * 解释：链表中没有环。
 * 
 * 
 * 
 * 
 * 
 * 
 * 进阶：
 * 
 * 你能用 O(1)（即，常量）内存解决此问题吗？
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

var hasCycle1 = function(head) {
    while(head && head.next) {
        if (head.flag) {
            return true
        } else {
            head.flag = 1
            head = head.next
        }
    }
    return false
}

var hasCycle = function(head) {
    if(!head || !head.next) return false
    let fast = head.next
    let slow = head
    while(fast != slow){
        if(!fast || !fast.next){
            return false
        }
        fast = fast.next.next
        slow = slow.next
    }
    return true
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle3 = function(head) {
    let count = 1
    while (head) {
        if (count > 10000) {
            return true
        }
        count += 1
        head = head.next
    }   
    // 环形链表是结束不了的
    return false
}

var hasCycle4 = function(head) {
    // 用set来装链表元素
    let cache = new Set()
    while(head) {
        if (cache.has(head)) { 
            // 只要再次出现存在的元素就说明有环
            return true
        } else {
            cache.add(head)
        }
        head = head.next
    }
    return false
}

var hasCycle5 = function(head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        fast = fast.next.next // 快指针跑两步
        slow = slow.next // 慢指针跑一步
        if (fast === slow) { // 如果慢的被快的套圈 那就有环
            return true
        }
    }
    return false
}
// @lc code=end

