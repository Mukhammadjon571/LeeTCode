/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    let ans=salary.sort(function(a,b){return a-b});
    let count=0;
    let divident=0
    for(let i=1;i<(ans.length-1);i++){
            count+=ans[i];
            divident+=1;
    }
    return count/divident;
    
};