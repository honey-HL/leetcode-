/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.58%)
 * Likes:    1338
 * Dislikes: 0
 * Total Accepted:    188.6K
 * Total Submissions: 464.7K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 遇到左括号入栈 遇到右括号出栈 如果右括号和出栈的左括号匹配那就匹配成功亦或是最终栈为也说明匹配成功
    let stack = []
    let obj = {'(':')', '[':']', '{':'}'}
    for (let i = 0; i < s.length; i++) {
        const ele = s[i]
        if (ele in obj) {
            stack.push(ele)
        } else {
            if (ele != obj[stack.pop()]) {
                return false
            }
        }
    }
    return !stack.length
};
// @lc code=end

