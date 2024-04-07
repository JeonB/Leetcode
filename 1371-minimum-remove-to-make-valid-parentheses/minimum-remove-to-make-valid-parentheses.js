/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let str = '';
    const stack = [];

    // 문자열을 순회하며 괄호 유효성 검사 및 필요한 괄호 제거
    for (let char of s) {
        if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            if (stack.length > 0) {
                stack.pop();
            } else {
                continue; // 잘못된 괄호 제거
            }
        }
        str += char;
    }

    // 남은 열린 괄호 제거
    while (stack.length > 0) {
        str = sliceStr(str);
        stack.pop();
    }

    return str;
};

// 괄호를 제거하는 함수
var sliceStr = function(str) {
    let slice = '';
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === '(') {
            slice = str.slice(0, i) + str.slice(i + 1);
            break;
        }
    }
    return slice;
};
