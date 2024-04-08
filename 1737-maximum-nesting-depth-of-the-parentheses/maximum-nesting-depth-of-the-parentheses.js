/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    // 최대 중첩 소괄호 수 구하기
    let a=[];
    let n=0;
    for(let char of s){
        if(char==='('){
            a.push(char);
            n=n>a.length?n:a.length;
        }
        else if(char===')'){
            a.pop();
        }
    }
    return n;
};