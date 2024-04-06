/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    // 문자열 s내에서  eE,Aa 같은 동일한 문자의 인접한 대소문자를 반복해서 지워나가야 함
    // 반복이 끝나는 조건은 더 이상 위와 같은 문자가 없을 때
    const stack = [];
    
    for (const char of s) {
        if (stack.length > 0 && Math.abs(char.charCodeAt() - stack[stack.length - 1].charCodeAt()) === 32) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
};

