/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b)=>b-a)
    for (var i=0;i<nums.length-1;i++){
        if (nums[i]===nums[i+1]){
            nums.splice(i,1)
            i--
        }
    }
    if (nums.length<3){
        return nums[0]
    }
    return nums[2]
    
};
// @lc code=end

