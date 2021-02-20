/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(var i=0;i<nums.length-1;i++){
        if(nums[i]===nums[i+1] && nums[i]===nums[i+2]){
            nums.splice(i,1)
            i--
        }
    }
};
// @lc code=end

