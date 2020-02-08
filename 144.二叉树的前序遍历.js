/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (63.56%)
 * Likes:    197
 * Dislikes: 0
 * Total Accepted:    63.2K
 * Total Submissions: 99.2K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
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
 * 输出: [1,2,3]
 * 
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
var preorderTraversal1 = function(root, arr = []) { 
    if (root) {
        arr.push(root.val)
        preorderTraversal(root.left, arr)
        preorderTraversal(root.right, arr)
    }
    return arr
};

// 迭代
var preorderTraversal1 = function(root) { 
    let result = []
    let cur = root
    let stack  = []
    while (cur || stack.length > 0) {
        while (cur) {
            result.push(cur.val) // 把自己存进去
            stack.push(cur) // 把自己缓存起来
            cur = cur.left // 一直把left给cur
        }
        cur = stack.pop() // 把入栈节点弹出来
        cur = cur.right // 再遍历右子树
    }
    return result
};

var preorderTraversal = function(root) { 
    let result = []
    let cur = root
    let stack  = []
    if (root == null) {
        return result
    }
    if (root != null) {
        stack.push(root)
        while (stack.length > 0) {
            cur = stack.pop()
            result.push(cur.val)
            if (cur.right != null) {
                stack.push(cur.right)
            }
            if (cur.left != null) {
                stack.push(cur.left)
            }
        }
    }
    return result
};
// @lc code=end

