/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let dp1 = 1 , dp2 = 0
    for(let i = s.length-1 ; i>=0 ; i--){
        let dp = s[i] === '0' ? 0 : dp1
        
        if(i < s.length-1 && (s[i] === '1' || s[i] === '2' && s[i+1]< '7'))
            dp+=dp2

        dp2=dp1
        dp1=dp
    }

    return dp1;
};