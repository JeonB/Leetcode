/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {
    let res = 0;
        let d = 1 << 30, c = 0;
        for(let a of nums) {
            let b = a ^ k;
            res += Math.max(a, b);
            c ^= a < b ? 1 : 0;
            d = Math.min(d, Math.abs(a - b));
        }
        return res - d * c;
};