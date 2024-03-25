/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let arr = [];
    for(let i = 0 ; i<s.length ; i++)
        arr.push(s.charAt(i));
    arr.sort((b,a) => a-b);
    arr.push('1');
    a = arr.join('');
    s = a.substring(1);
    return s;
};