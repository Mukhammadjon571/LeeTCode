/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    let ans=n.toString().split("");
    let product=1
    let sum=0;
    for(let i=0;i<ans.length;i++){
        product*=Number(ans[i]);
        sum+=Number(ans[i]);
    }
    
    return product-sum;
    
};