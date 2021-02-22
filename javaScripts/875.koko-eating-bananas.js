/*
 * @lc app=leetcode id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */

const timeOf=(speed,pile)=>{
    return Math.floor(pile/speed)+((pile%speed===0)?0:1);
}

 const canFinish = (piles,H,speed)=>{
     let  time=0;
     for (var i=0;i<piles.length;i++){
         time=time+timeOf(speed,piles[i])
     }
     return time<=H;
 }


var minEatingSpeed = function(piles, H) {
    let left =1;
    let right = Math.max(...piles);
    let mid ;

    while (left < right){
        mid=Math.floor(left+(right-left)/2)
        if(canFinish(piles,H,mid)){
            right=mid;
        }else{
            left=mid+1;
        }
    }
    return left;
    
};
// @lc code=end
