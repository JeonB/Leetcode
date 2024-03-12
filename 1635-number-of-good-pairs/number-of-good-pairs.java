class Solution {
    public int numIdenticalPairs(int[] nums) {
        int ans = 0;
        HashMap<Integer, Integer> map = new HashMap<>();

        for(int i = 0 ; i<nums.length ; i++){
            if(!map.containsKey(nums[i])){
                map.put(nums[i],0);
            }else{
                ans += (map.get(nums[i]) + 1);
                map.put(nums[i],map.get(nums[i]) +1 );
            }
        }

             return ans;
    }
}