/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    // let count=nums.filter(x=>x==0).length;
    // nums=nums.filter(x=>x!=0);
    // console.log(nums);
    // for(let i=0;i<count;i++){
    //     nums.push(0);
    // }
    let nonZeroIndex=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            [nums[i],nums[nonZeroIndex]]=[nums[nonZeroIndex],nums[i]];
             ++nonZeroIndex;
        }
       
    }
    
};