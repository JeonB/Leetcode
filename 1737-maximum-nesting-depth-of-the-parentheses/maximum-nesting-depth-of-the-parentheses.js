/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let a=[];
    let n=0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            a.push(s[i]);
            n=n>a.length?n:a.length;
        }
        else if(s[i]===')'){
            a.pop();
        }
    }
    return n;
};