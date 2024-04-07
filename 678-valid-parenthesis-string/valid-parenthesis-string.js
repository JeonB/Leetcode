/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    // *가 3가지 경우의 수를 갖음에 따라 각 경우의 수에 해당하는 열린 괄호 개수 수 구하기
    // *에 따른 열린 괄호 개수의 최솟값과 최댓값 cmin, cmax
    // 열린 괄호 최소 개수가 0이 되어야 참
    let cmin = 0, cmax = 0
    for(let char of s){
        if(char === '('){ 
            cmin++
            cmax++
        }else if(char === ')'){
            cmin--
            cmax--
        }else{
            cmin--
            cmax++
        }

        if(cmax < 0) return false

        cmin = Math.max(cmin,0)
    }
    return cmin === 0;

};