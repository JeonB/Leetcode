/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    const MOD = 1000000007;

    // Initialize dp arrays
    let dp_last = Array.from({ length: 2 }, () => Array(3).fill(0)); // previous state
    let dp_current = Array.from({ length: 2 }, () => Array(3).fill(0)); // current state

    dp_last[0][0] = 1; // empty string

    for (let i = 0; i < n; i++) {
        for (let count_a = 0; count_a < 2; count_a++) {
            for (let count_l = 0; count_l < 3; count_l++) {
                // choose "P"
                dp_current[count_a][0] = (dp_current[count_a][0] + dp_last[count_a][count_l]) % MOD;
                // choose "A"
                if (count_a === 0) {
                    dp_current[count_a + 1][0] = (dp_current[count_a + 1][0] + dp_last[count_a][count_l]) % MOD;
                }
                // Choose "L"
                if (count_l < 2) {
                    dp_current[count_a][count_l + 1] = (dp_current[count_a][count_l + 1] + dp_last[count_a][count_l]) % MOD;
                }
            }
        }
        dp_last = dp_current; // Reference current to previous
        dp_current = Array.from({ length: 2 }, () => Array(3).fill(0)); // make new current
    }

    // Sum up the counts for all combinations of length 'n' with different count_a and count_l.
    let res = 0;
    for (let count_a = 0; count_a < 2; count_a++) {
        for (let count_l = 0; count_l < 3; count_l++) {
            res = (res + dp_last[count_a][count_l]) % MOD;
        }
    }
    return res;
};