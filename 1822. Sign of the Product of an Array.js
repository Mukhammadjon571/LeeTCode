/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
    let count=1;
    for(let i=0;i<nums.length;i++){
        if (nums[i]==0){
            return 0;
        } 
        count*=nums[i];
    }
    return (count<0)?-1:1;
};