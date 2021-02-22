/*
 * @lc app=leetcode id=1011 lang=javascript
 *
 * [1011] Capacity To Ship Packages Within D Days
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */

 const getMax=(weights)=>{
     return Math.max(...weights)
 }

 const getSum = (weights)=>{
     let sum=0;
     for (let i of weights){
         sum=sum+i
     }
     return sum
 }

const canFinish=(weights,D,cap)=>{
    let i=0;
    for (let day=0;day<D;day++){
        let maxCap=cap;
        while((maxCap=maxCap-weights[i])>=0){
            i++
            if(i===weights.length){
                return true;
            }
        }
    }
    return false


}
var shipWithinDays = function(weights, D) {
    let left=getMax(weights)
    let right=getSum(weights)
    let mid;

    while(left<right){
        mid=Math.floor(left+(right-left)/2)
        if(canFinish(weights,D,mid)){
            right=mid;
        }else{
            left=mid+1;
        }
    }
    return left;
};
// @lc code=end


