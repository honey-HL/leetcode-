/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (69.68%)
 * Likes:    215
 * Dislikes: 0
 * Total Accepted:    47.3K
 * Total Submissions: 67.7K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [3,2,1]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

// @lc code=start
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
// 递归
var postorderTraversal1 = function(root, arr = []) {
    if (root) {
        postorderTraversal(root.left, arr)
        postorderTraversal(root.right, arr)
        arr.push(root.val)
    }
    return arr
};

// 迭代
var postorderTraversal = function(root) {
    let cur = root
    let stack = []
    let result = []
    if (!root) {
        return result
    }
    while (cur || stack.length > 0) {
        while (cur) {
            stack.push(cur)
            result.unshift(cur.val)
            cur = cur.right
        }
        cur = stack.pop()
        cur = cur.left
        
    }
    return result
};
// @lc code=end

