/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const count={};
   for(let num of nums){
     if(count[num]){
       count[num]+=1
       }
     else{
         count[num]=1
     }
   }
   let res=Object.keys(count).sort(function(a,b){return count[a]-count[b]});
   let ans=res.map((num)=>{return Number(num)});
   let res_all=ans.slice(ans.length-k);
   return res_all;
   
   
   
   
};