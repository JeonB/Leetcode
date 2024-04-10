/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    let first = Array(26).fill(1000000), last = Array(26).fill(0), res = 0;
    for(let i = 0 ; i< s.length ; ++i){
        first[s.charCodeAt(i) - 97] = Math.min(first[s.charCodeAt(i) - 97], i);
        last[s.charCodeAt(i) - 97] = i;
    }
    for (let i = 0; i < 26; ++i) {
        if (first[i] < last[i]) {
        let substr = s.substring(first[i] + 1, last[i]);
        let distinctCharsCount = new Set(substr).size;
        res += distinctCharsCount;
        }
    }
    return res;
};