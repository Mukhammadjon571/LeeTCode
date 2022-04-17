/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    let l=1;
    let r=x;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        let p = mid*mid;
        if(p>x){
            r=mid-1;
        } 
        else if(p<x){
            l=mid+1;
        }
        else {
            return mid;
        }
    }
    return r;
    
};