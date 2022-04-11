/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    let ans=nums.slice(0,nums.length);
    for(let i=0;i<nums.length;i++){
        ans.push(nums[i]);
    }
    return ans;
};