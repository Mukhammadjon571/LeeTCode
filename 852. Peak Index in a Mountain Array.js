/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    let left=0;
    let right=arr.length;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(arr[mid]>0 && arr[mid]>arr[arr.length-1]){
            return mid;
        }
        else if(arr[mid]<0 && arr[mid]>arr[arr.length-1]){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
    }
};