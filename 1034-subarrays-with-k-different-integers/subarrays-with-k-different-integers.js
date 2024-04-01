/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    return atMost(nums,k) - atMost(nums,k-1);
};

function atMost(nums, k){
    let i = 0, res = 0;
    const count = new Map();
    for(let j = 0 ; j<nums.length ; ++j){
       if (!count.has(nums[j]) || count.get(nums[j]) === 0) {
            k--;
        }
        
        count.set(nums[j], (count.get(nums[j]) || 0) + 1);
        while(k<0){
            count.set(nums[i],count.get(nums[i])-1);
            if(count.get(nums[i]) === 0) k++;
            i++;
        }
        res += j - i + 1;
    }
    return res;
}