/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.trim().split(' ');
    let ans = 0;
    
    ans = arr[arr.length-1].length;
    return ans;
};