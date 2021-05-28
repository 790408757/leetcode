/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const x = new Map()
    for(let y = 0;y < nums.length;y++){
        const n = nums[y]
        const n2 = target - n
        if(x.has(n2)){
            return [x.get(n2), y]
        }else{
            x.set(n, y)
        }
    }
};
// @lc code=end

