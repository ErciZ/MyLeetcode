/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(var i=0;i<nums.length;i++){
        if(nums[i]===nums[i+1]){
            nums.splice(i,1)
            i--
        }
    }
};
// @lc code=end

