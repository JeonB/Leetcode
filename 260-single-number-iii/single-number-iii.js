/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let overall_xor = 0;
    for (const n of nums) {
        overall_xor ^= n;
    }

    let first_group_xor = 0;
    let second_group_xor = 0;

    let bit_pos_dif = 0;
    while (((overall_xor >> bit_pos_dif) & 1) !== 1) {
        bit_pos_dif++;
    }

    for (const num of nums) {
        if (((num >> bit_pos_dif) & 1) === 1) {
            first_group_xor ^= num;
        } else {
            second_group_xor ^= num;
        }
    }

    return [first_group_xor, second_group_xor];
};