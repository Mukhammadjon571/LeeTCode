
var solution = function(isBadVersion) {
    return function(n) {
        let left=1;
        let right=n;
        while(left<=right){
            let mid=Math.floor((left+right)/2);
            if(isBadVersion(mid) && !isBadVersion(mid-1)){
                return mid;
            }
            else if(!isBadVersion(mid)){
                left=mid+1;
            }
            else{
                right=mid-1;
            }
        }
    };
};