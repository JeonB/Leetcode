/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let m = Math.max(...nums); 
    let ans = 0, ii = 0, freq = 0; 
    for (let x of nums) {
        if (x == m) ++freq; 
        while (freq == k) 
            if (nums[ii++] == m) --freq; 
        ans += ii; 
    }
    return ans; 
};