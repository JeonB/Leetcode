/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let nonspaceString = s.trim();
    let ans = 0;
    
    for(let i = nonspaceString.length-1 ; i >= 0 ;i--){
        if(nonspaceString.charAt(i).includes(' '))
            return ans;
        
        ans++;
    }

    return ans;
};