
 var specialArray = function(nums) {
    let i=0
    while(true){
        let count=0
        for(let j=0;j<nums.length;j++){if(nums[j]>=i){count++}}
        if(i==count){return i}
        i++
        if(i>nums.length){break}
    }
    return -1
};