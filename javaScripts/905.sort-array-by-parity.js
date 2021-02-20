/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const odd = [];
    const even = [];
    for(var i=0;i<A.length;i++){
        if(A[i]%2===1){
            odd.push(A[i])
        }else{
            even.push(A[i])
        }
    }
    return [...even,...odd]
};
// @lc code=end


