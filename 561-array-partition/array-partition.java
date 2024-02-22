class Solution {
    public int arrayPairSum(int[] nums) {
         
         Arrays.sort(nums); //1,2,2,5,6,6
         int ans = 0 ;
         for(int i = 0 ; i<nums.length - 1 ; i+=2){
             ans += nums[i];
         }

        return ans;

    }
}