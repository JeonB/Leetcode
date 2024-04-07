/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
   const stack = [];
    const sArray = s.split('');

    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] == '(') {
            stack.push(i); // mark for potential deletion
        } else if (sArray[i] == ')') {
            if (stack.length == 0) {
                sArray[i] = ''; // delete the closing one
            } else {
                stack.pop() // found a match
            }
        }
    }

    // anything left in the stack is unmatched openings. delete them
    for (let i = 0; i < stack.length; i++) {
        sArray[stack[i]] = '';
    }

    return sArray.join('');
};

// // 괄호를 제거하는 함수
// var sliceStr = function(str) {
//     let slice = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         if (str[i] === '(') {
//             slice = str.slice(0, i) + str.slice(i + 1);
//             break;
//         }
//     }
//     return slice;
// };
