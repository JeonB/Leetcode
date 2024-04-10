/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let answer = 0, temp = 0;

        for (const char of alphabet) {
            const left = s.indexOf(char);
            if (left === -1) {
                continue;
            }
            const right = s.lastIndexOf(char);
            if (left >= right) {
                continue;
            }

            const validCheck = new Array(26).fill(false);
           
            for (let i = left + 1; i < right; i++) {
                if (!validCheck[s.charCodeAt(i) - 97]) {
                    validCheck[s.charCodeAt(i) - 97] = true;
                    temp++;
                    if (temp === 26) {
                        break;
                    }
                }
            }
            answer += temp;
            temp = 0;
        }
        return answer;
};