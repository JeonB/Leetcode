/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {

    let res = 0, sz = nums.length;
    let cnt = new Array(sz+1).fill(0);
    for (let l = 0, m = 0, r = 0; r < sz; ++r) {
        if (++cnt[nums[r]] === 1)
            if (--k < 0) {
                cnt[nums[m++]] = 0;
                l = m;
            }
        if (k <= 0) {
            while (cnt[nums[m]] > 1)
                --cnt[nums[m++]];
            res += m - l + 1;   
        }
    }    
    return res;
};