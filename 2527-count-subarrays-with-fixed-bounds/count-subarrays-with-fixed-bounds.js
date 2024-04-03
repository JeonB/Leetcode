/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let res = 0, jbad = -1, jmin = -1, jmax = -1, n = nums.length;
    for(let i = 0; i<n ; ++i){
        if(nums[i] <minK || nums[i] > maxK) jbad = i;
        if(nums[i] === minK) jmin = i;
        if(nums[i] === maxK) jmax = i;
        res += Math.max(0, Math.min(jmin, jmax) - jbad);
    }
    return res
};