/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
      let maxDeque = [];
    let minDeque = [];
    let left = 0;
    let result = 0;

    for (let right = 0; right < nums.length; right++) {
        while (maxDeque.length > 0 && nums[maxDeque[maxDeque.length - 1]] <= nums[right]) {
            maxDeque.pop();
        }
        maxDeque.push(right);

        while (minDeque.length > 0 && nums[minDeque[minDeque.length - 1]] >= nums[right]) {
            minDeque.pop();
        }
        minDeque.push(right);

        while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
            left++;
            if (maxDeque[0] < left) {
                maxDeque.shift();
            }
            if (minDeque[0] < left) {
                minDeque.shift();
            }
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
};