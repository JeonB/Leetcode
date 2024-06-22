/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
       let count = 0;
    let oddCount = 0;
    let prefixCounts = { 0: 1 };

    for (let num of nums) {
        if (num % 2 !== 0) {
            oddCount++;
        }

        if (prefixCounts[oddCount - k] !== undefined) {
            count += prefixCounts[oddCount - k];
        }

        if (prefixCounts[oddCount] === undefined) {
            prefixCounts[oddCount] = 0;
        }
        prefixCounts[oddCount]++;
    }

    return count;
};

