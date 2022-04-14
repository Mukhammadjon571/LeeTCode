/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let even=nums.filter(num=>num%2==0);
    let odd=nums.filter(num=>num%2!=0);
    for(let i=0;i<odd.length;i++){
        even.push(odd[i]);
    }

    return even;
    
};