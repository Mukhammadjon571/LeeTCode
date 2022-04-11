/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let count=0;
    let ans=[];
    for(let i=0;i<nums.length;i++){
        count+=nums[i];
        ans.push(count);
    }
    return ans;
};