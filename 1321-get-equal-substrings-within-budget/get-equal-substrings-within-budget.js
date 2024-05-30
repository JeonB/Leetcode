/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    
    let cost = 0
    let start = 0
    let maxSubStringLength = 0
    for(let end = 0 ; end < s.length ; end++){
        cost += Math.abs(s.charCodeAt(end) - t.charCodeAt(end))
        while(maxCost < cost){
            cost -= Math.abs(s.charCodeAt(start) - t.charCodeAt(start))
            start++
        }
        maxSubStringLength = Math.max(maxSubStringLength, end - start + 1)
   }

   return maxSubStringLength
};