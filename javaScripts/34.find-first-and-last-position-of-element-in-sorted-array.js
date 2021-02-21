/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
const left_bound = (nums, target)=>{
    if(nums.length===0){return -1}

    let left=0;
    let right=nums.length-1;
    let mid;

    while (left<=right){
        mid=Math.floor(left+(right-left)/2)
        if(nums[mid]===target){
            right=mid-1;
        }else if(nums[mid]>target){
            right=mid-1;
        }else if(nums[mid]<target){
            left=mid+1;
        }
    }
    if (nums[left]!==target || left>=nums.length){
        return -1;
    }
    return left
}

const right_bound=(nums,target)=>{
    if(nums.length===0){return -1}
    let left=0;
    let right=nums.length-1;
    let mid;

    while (left<=right){
        mid=Math.floor(left+(right-left)/2)
        if(nums[mid]===target){
            left=mid+1;
        }else if(nums[mid]>target){
            right=mid-1;
        }else if(nums[mid]<target){
            left=mid+1;
        }
    }
    if (nums[right]!==target || right<0){
        return -1;
    }
    return left-1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    return [left_bound(nums, target),right_bound(nums, target)]
};
// @lc code=end
