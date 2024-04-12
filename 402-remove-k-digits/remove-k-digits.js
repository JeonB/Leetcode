/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    // 문자열 숫자 num에서 k자리수를 제거하여 가장 작은 수를 리턴해야하는 문제
    let ans = "";
for (let i = 0; i < num.length; i++) {
    let c = num.charAt(i);
    while (ans.length && c < ans.charAt(ans.length - 1) && k) { 
        ans = ans.slice(0, -1); 
        k--; 
    }
    if (ans.length || c !== '0') { 
        ans += c; 
    }
}
while (k-- && ans.length) { 
    ans = ans.slice(0, -1); 
}
return ans.length ? ans : "0";

};