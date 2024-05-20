/**
 * @param {number[]} nums
 * @return {number}
 */
 var sum = 0
var subsetXORSum = function(nums) {
    sum = 0
    return getAns(nums,0,0)
};

var getAns = function(arr, i, cur){
    if(i === arr.length)
        return cur
    
    return getAns(arr,i+1,cur^arr[i]) + getAns(arr,i+1, cur)
}
