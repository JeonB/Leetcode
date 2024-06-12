/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if( n > 2 &&n%3 !== 0)return false
    if( n<=0 )return false
    if( n === 1) return true
    return isPowerOfThree(n/3)
   
};