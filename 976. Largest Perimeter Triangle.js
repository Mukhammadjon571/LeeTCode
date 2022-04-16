/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestPerimeter = function(nums) {
    nums = nums.sort((a,b)=>b-a)
    for(let i = 2; i < nums.length; i++){
        if(nums[i] + nums[i-1] > nums[i-2]) return nums[i] + nums[i-1] + nums[i-2]
    }
    return 0;

    
};