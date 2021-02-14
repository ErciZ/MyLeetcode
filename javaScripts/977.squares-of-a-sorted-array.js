/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const absOrder = nums.sort((a, b)=>{
        return Math.abs(a)-Math.abs(b)
    })
    return absOrder.map(x=>x*x)    
};
// @lc code=end


