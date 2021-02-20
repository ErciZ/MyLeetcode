/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const result =[]
    for (var i=0;i<nums.length;i++){
        if(nums.indexOf(i+1)===-1){
            result.push(i+1)
        }
    }
    return result    
};
// @lc code=end

