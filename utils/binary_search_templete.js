

// template

// const binarySearch = (nums:Array<number>,target:number)=>{
//     let left=0;
//     let right= ...;
//     let mid ;
//     while (...){
//         mid= left + (right-left)/2
//         if(nums[mid]===target){
//             ...
//         }else if(nums[mid]<target){
//             left=...
//         }else if(nums[mid>target]){
//             right=...
//         }
//     }
//     return ...;
// }

// Search one target number : [ ]
const binarySearch =(nums,target)=>{
    let left=0;
    let right = nums.length-1;
    let mid ;
    while (left<=right){
        mid=Math.floor(left + (right-left)/2)
        if(nums[mid]===target){
            return mid;
        }else if(nums[mid]<target){
            left=mid+1;
        }else if(nums[mid]>target){
            right=mid-1;
        }
    }
    return -1;
}

// Search first target number : [ )
const left_bound1=(nums,target)=>{
    if(nums.length===0){return -1;}
    let left=0;
    let right=num.length;
    let mid;

    while (left<right){
        mid=Math.floor((left+right)/2);
        if(nums[mid]===target){
            right=mid;
        }else if(nums[mid]<target){
            left=mid+1;
        }else if(nums[mid]>target){
            right=mid;
        }
    }

    if (left===nums.length){ return -1;}
    return nums[left]===target?left:-1
}

// Search first target number : [ ]
const left_bound2=(nums,target)=>{
    if(nums.length===0){return -1}
    let left=0;
    let right=num.length-1;
    let mid;

    while(left<=right){
        mid=Math.floor(left+(right-left)/2)
        if(nums[mid]===target){
            right=mid-1;
        }else if(nums[mid]<target){
            left=mid+1;
        }else if(nums[mid]>target){
            right=mid-1;
        }
    }
    if (left>=nums.length || num[left]!=target){
        return -1;
    }
    return left;
}



// Search last target number : [ )
const right_bound1=(nums,target)=>{
    if(nums.length===0){return -1;}
    let left=0;
    let right=num.length;
    let mid;

    while (left<right){
        mid=Math.floor((left+right)/2);
        if(nums[mid]===target){
            left=mid+1;
        }else if(nums[mid]<target){
            left=mid+1;
        }else if(nums[mid]>target){
            right=mid;
        }
    }

    if (left===0){ return -1;}
    return nums[left-1]===target?left-1:-1
}

// Search first target number : [ ]
const right_bound2=(nums,target)=>{
    if(nums.length===0){return -1}
    let left=0;
    let right=nums.length-1;
    let mid;

    while(left<=right){
        mid=Math.floor(left+(right-left)/2)
        if(nums[mid]===target){
            left=mid+1;
        }else if(nums[mid]<target){
            left=mid+1;
        }else if(nums[mid]>target){
            right=mid-1;
        }
    }
    if (right<0 || nums[right]!=target){
        return -1;
    }
    return right;
}



