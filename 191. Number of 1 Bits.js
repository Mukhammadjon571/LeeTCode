/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let ans=n.toString(2);
    let count=0;
    for(let i=0;i<ans.length;i++){
        if(ans[i]=="1"){
            count+=1;
        }
    }
    return count;
    
};