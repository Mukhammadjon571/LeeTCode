/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canMakeArithmeticProgression = function(arr){
    let arr_s=arr.sort(function(a,b){return a-b});
    let ans=[];
    for(let i=1;i<arr_s.length;i++){
        ans.push(arr_s[i]-arr_s[i-1]);
    }
    
    let set=new Set(ans);
   if(Array.from(set).length==1){
       return true;
   }
   else{return false;}
    
};