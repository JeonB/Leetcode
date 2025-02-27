/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
      const parenthese = {
            '(' : ')',
            '{' : '}',
            '[' : ']',
        }
        const stack = []
     
        for(const c of s){
            if(Object.keys(parenthese).includes(c)){
                stack.push(c)
            }else{
                if(stack.length === 0) return false
                  
                if(parenthese[stack.at(-1)] === c) stack.pop()
                else return false
            }
        }


        return stack.length === 0 ? true : false
};