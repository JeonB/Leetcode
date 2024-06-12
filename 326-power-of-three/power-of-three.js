/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    const maxPowerOfThree = Math.pow(3,Math.round( Math.log(0x7fffffff) / Math.log(3)));
    return n>0 && maxPowerOfThree%n==0;
};