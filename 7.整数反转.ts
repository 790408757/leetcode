/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
    let rev: number = 0;
    while (x != 0) {
        let i = x % 10;
        x = ~~(x / 10);
        rev = rev * 10 + i;
    }
    return rev <= Math.pow(-2, 31) || rev >= Math.pow(2, 31) ? 0 : rev;
}
// @lc code=end
