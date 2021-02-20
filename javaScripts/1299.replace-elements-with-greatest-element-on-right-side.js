/*
 * @lc app=leetcode id=1299 lang=javascript
 *
 * [1299] Replace Elements with Greatest Element on Right Side
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
// var replaceElements = function(arr) {
//     if(arr.length<2){
//         return [-1]
//     }
//     for(var i=0;i<arr.length-1;i++){
//         arr[i]=Math.max(...arr.slice(i+1))
//     }
//     arr[arr.length-1]=-1
//     return arr
// };

var replaceElements = function(arr) {
    if(arr.length<2){
        return [-1]
    }
    let temMax=arr[arr.length-1];
    for(var i=arr.length-1;i>=0;i--){
        if(temMax<arr[i]){
            const tep = arr[i]
            arr[i]=temMax
            temMax=tep
        }else{
            arr[i]=temMax
        }
    }
    arr[arr.length-1]=-1
    return arr
};
// @lc code=end
