/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length<3){
        return false
    }
    const maxNum = Math.max(...arr)
    const maxIndex=arr.indexOf(maxNum)
    if (maxIndex===0 || maxIndex===arr.length-1 ){
        return false
    }
    let leftFlag=1
    let rightFlag=1
    for (var i=maxIndex;i<arr.length-1;i++){
        if(arr[i+1]<arr[i]){
            rightFlag=rightFlag*1
        }else{
            rightFlag=rightFlag*0
        }
    }

    for (var i=maxIndex;i>0;i--){
        if(arr[i]>arr[i-1]){
            leftFlag=leftFlag*1
        }else{
            leftFlag=leftFlag*0
        }
    }
    if (rightFlag*leftFlag===1){
        return true
    }
    return false
     
};
// @lc code=end