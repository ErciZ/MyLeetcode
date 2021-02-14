/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const zeroIndex=[]
    for(var i=0;i<nums.length;i++){
        if(nums[i]===0){
            zeroIndex.push(i)
        }
    }
    zeroIndex.unshift(-1)
    zeroIndex.push(nums.length)
    const result=[]
    for(var j=0;j<zeroIndex.length-1;j++){
        result.push(zeroIndex[j+1]-zeroIndex[j]-1)
    }
    return Math.max(...result)
};

var findMaxConsecutiveOnes2 = function(nums) {
    const windowOpen=[]
    const windowClose=[]
    nums.unshift(0)
    nums.push(0)
    for (var i=0;i<nums.length+2;i++){

        if(nums[i]===1){
            if(nums[i-1]===0){
                windowOpen.push(i)
            }

            if(nums[i+1]===0){
                windowClose.push(i)
            }
        }
    }
    if (windowOpen.length===0){
        return 0
    }
    console.log(nums)
    console.log(windowOpen)
    console.log(windowClose)
    const result=[]
    for(var j=0;j<windowOpen.length;j++){
        result.push(windowClose[j]-windowOpen[j]+1)
    }
    return Math.max(...result)
};
// @lc code=end


