/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    let ans=nums.slice(0,nums.length-1);
    for(let i=0;i<nums.length;i++){
        ans[i]=nums[nums[i]];
    }
    return ans;
};