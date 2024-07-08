/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr = []
    nums.sort((a,b)=>a-b)
    while(nums.length > 0){
        let a = nums.shift()
        let b = nums.shift()
        arr.push(b)
        arr.push(a)
    }
    return arr
};