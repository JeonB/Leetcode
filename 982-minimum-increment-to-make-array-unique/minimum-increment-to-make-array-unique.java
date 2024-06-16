class Solution {
    public int minIncrementForUnique(int[] nums) {
       
        int result = 0;
        Arrays.sort(nums);
        int highestTillNow = nums[0];
        
        for(int i = 1; i<nums.length; i++){
            if(nums[i] <= highestTillNow){
                result += (highestTillNow-nums[i]+1);
                highestTillNow++; 
            }
            else
                highestTillNow = nums[i];
        }
        return result;
    }
}