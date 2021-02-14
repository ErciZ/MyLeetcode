/*
 * @lc app=leetcode id=1295 lang=javascript
 *
 * [1295] Find Numbers with Even Number of Digits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let result=0;
    nums.forEach(num=>{
        if(num.toString().length % 2===0 ){
            result=result+1
        }
    })
    return result
};
// @lc code=end

