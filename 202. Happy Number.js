/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n,seen=new Set()) {
    if (n===1) return true; 
    if (seen.has(n)) return false;
    seen.add(n);
    let num = 0;
    while (n >=1) {
        num+=(n%10)**2;
        n=Math.trunc(n/10);
    } 
    return isHappy(num,seen);
};