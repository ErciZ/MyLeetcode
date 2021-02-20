/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let numZero=0
    for (var i=0;i<nums.length;i++){
        if (nums[i]===0){
            numZero++
            nums.splice(i,1)
            i--
           
        }
    }
   
    for(var j=0;j<numZero;j++){
        nums.push(0)
    }
};
// @lc code=end
