/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (69.70%)
 * Likes:    377
 * Dislikes: 0
 * Total Accepted:    96.8K
 * Total Submissions: 138.7K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
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
 * 输出: [1,3,2]
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
var inorderTraversal1 = function(root, arr = []) {
    if (root) {
        inorderTraversal(root.left, arr)
        arr.push(root.val)
        inorderTraversal(root.right, arr)
    }
   return arr
};

// 迭代
var inorderTraversal = function(root) {
    let result = []
    let cur = root
    let stack  = []
    while (cur || stack.length > 0) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        result.push(cur.val)
        cur = cur.right
    }
    return result
}
// @lc code=end

