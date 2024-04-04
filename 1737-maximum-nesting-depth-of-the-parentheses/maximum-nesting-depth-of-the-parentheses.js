/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let ans = 0,openParen=0;
    for(let i = 0 ; i<s.length;i++){
        if(s.charAt(i)==='('){
            openParen++;
            ans = Math.max(ans, openParen) }
        else if(s.charAt(i)===')')
            openParen--;
    }
    return ans;
};