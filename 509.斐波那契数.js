/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 *
 * https://leetcode-cn.com/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (65.80%)
 * Likes:    87
 * Dislikes: 0
 * Total Accepted:    33.8K
 * Total Submissions: 51.4K
 * Testcase Example:  '2'
 *
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * 
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
 * 
 * 
 * 给定 N，计算 F(N)。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：2
 * 输出：1
 * 解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
 * 
 * 
 * 示例 2：
 * 
 * 输入：3
 * 输出：2
 * 解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
 * 
 * 
 * 示例 3：
 * 
 * 输入：4
 * 输出：3
 * 解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 ≤ N ≤ 30
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
/*
方法一 递归(调用函数本身达到计算的目的)
*/
// var fib = function(N) {
//     if (N == 0 || N == 1) {
//         return N
//     }
//     return fib(N-1) + fib(N-2)
// };

/*
方法二 递推(根据已知推倒未知)  算法复杂度是O(n)
*/
var fib = function(N) {
    let cache = []
    for (let i = 0; i <= N; i++) {
        if (i == 0 || i == 1) {
            cache[i] = i
        } else {
            cache[i] = cache[i -1] + cache[i -2]
        }
    }
    return cache[N]
};
// @lc code=end

