/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    // 문자열 숫자 num에서 k자리수를 제거하여 가장 작은 수를 리턴해야하는 문제
     if (num.length === k) return '0';

    const stack = [];

    for (let i = 0; i < num.length; i++) {
        const current = num[i];
        while (stack.length && stack[stack.length - 1] > current && k > 0 ) {
            stack.pop();
            k--;
        }
        stack.push(current);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    while (stack.length > 1 && stack[0] === '0') {
        stack.shift();
    }

    return stack.join('');

};