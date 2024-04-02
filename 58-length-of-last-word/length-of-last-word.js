/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = 0 , tail = s.length - 1;
    while(tail >= 0 && s[tail] === ' ') tail--;
    while(tail >= 0 && s[tail] !== ' ') {
        len++;
        tail--;
    }
    return len;
};