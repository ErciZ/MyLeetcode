/*
 * @lc app=leetcode id=1346 lang=javascript
 *
 * [1346] Check If N and Its Double Exist
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */

var checkIfExist = function(arr) {
    for(var i=0;i<arr.length;i++){
        if(arr.indexOf(2*arr[i])!==-1 && arr.indexOf(2*arr[i])!==i){
            return true;
        }
    }
    return false
};
// @lc code=end