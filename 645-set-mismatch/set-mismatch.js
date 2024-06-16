/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {


    let ans = []
    let check = 1
    nums.sort((a,b) => a-b)
    for(let i = 1 ; i<nums.length ; i++){
        if(nums[i] === nums[i-1] ) ans.push(nums[i])
    }
    
    while(nums.includes(check)){
        check++
    }
    ans.push(check)
    return ans
};