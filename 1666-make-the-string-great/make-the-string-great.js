/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
     if(s.length<=1) return s
    let arr=[]
   for(let i=0;i<s.length;i++) {
       let current=s[i];
       if(arr.length>0) {
           let lastChar=arr[arr.length-1];
           if(lastChar!==current&&lastChar.toUpperCase()===current.toUpperCase()) {
               arr.pop();
               continue
           }
       }
       arr.push(s[i])
   }
    return arr.join("")
};