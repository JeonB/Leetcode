/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left =0,right = height.length - 1
    let maxLeftHeight = 0, maxRightHeight = 0
    let trappedWater = 0

    while(left < right){
        if(height[left] < height[right]){
            if(height[left] < maxLeftHeight){
                trappedWater += maxLeftHeight - height[left]
            }else{
                maxLeftHeight = height[left]
            }
            left++
        }else{
            if(height[right] < maxRightHeight){
                trappedWater += maxRightHeight - height[right]
            }else{
                maxRightHeight = height[right]
            }
            right--
        }
    }

    return trappedWater
};