/*
 * @lc app=leetcode id=1051 lang=javascript
 *
 * [1051] Height Checker
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const newHeights= heights.slice().sort((a,b)=>a-b);
    let result=0
    for (var i=0;i<heights.length;i++){
        if (heights[i]!==newHeights[i]){
            result++
        }
    }
    return result
};
// @lc code=end


