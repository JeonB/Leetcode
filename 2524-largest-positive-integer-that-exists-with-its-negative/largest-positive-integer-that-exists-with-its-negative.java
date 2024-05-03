class Solution {
    public int findMaxK(int[] nums) {
        Arrays.sort(nums);
        int j = 0, i = nums.length - 1;
        while( j < i){
            if(nums[i] == -nums[j])
                return nums[i];
            else if(nums[i] < -nums[j])
                j++;
            else if(nums[i] > -nums[j])
                i--;        
        
        }

        return -1;
    }
}