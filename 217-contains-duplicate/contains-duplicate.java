class Solution {
    public boolean containsDuplicate(int[] nums) {
        boolean ans = false;
        // Arrays.sort(nums);


        // for(int i = 0; i<nums.length - 1 ; i++){
        //     if(nums[i] == nums[i+1]){
        //         ans = true;
        //         break;
        //     }

        // }

        HashMap<Integer, Integer> map = new HashMap<>();
        for(int i = 0 ; i<nums.length; i++){
            if(map.containsKey(nums[i])){
                ans=true;
                break;
            }else{
                map.put((nums[i]),1);
            }
        }
        return ans;
    }
}