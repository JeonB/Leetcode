/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort( function(a,b) {
        return a-b;
    } )
    let p1 = 0;
    let closestDiff = 100000;
    let closestSum = 100000;
    let n = nums.length;

    while ( p1 < n ) {
        let p2 = p1+1;
        let p3 = n-1;

        while ( p2 < p3 ) {
            let tSum = nums[p1] + nums[p2] + nums[p3];
            let tDiff = abs(target - tSum)

            if(tDiff == 0) {
                return tSum;
            }

            if(tDiff < closestDiff) {
                closestDiff = tDiff;
                closestSum = tSum;
            }

            //Update our pointers?
            if (tSum < target) {
                p2++;
                while(p2 < p3 && nums[p2] == nums[p2-1]) {
                    p2++
                }
                continue;
            }

            if (tSum > target) {
                p3--;
                while(p2 < p3 && nums[p3] == nums[p3+1]) {
                    p3--
                }
                continue;
            }
        }

        p1++;
        while(p1<n && nums[p1] == nums[p1-1]) {
            p1++;
        }
    }

    function abs(value) {
        if(value < 0) {
            return -1 * value;
        }
        return value;
    }

    return closestSum;
};