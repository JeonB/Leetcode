class Solution {
    public boolean containsDuplicate(int[] nums) {
        boolean ans = false;

        // 1. 배열정렬
        // Arrays.sort(nums);
        // for(int i = 0; i<nums.length - 1 ; i++){
        //     if(nums[i] == nums[i+1]){
        //         ans = true;
        //         break;
        //     }
        // }

        // 2. 해쉬맵
        // HashMap<Integer, Integer> map = new HashMap<>();
        // for(int i = 0 ; i<nums.length; i++){
        //     if(map.containsKey(nums[i])){
        //         ans=true;
        //         break;
        //     }else{
        //         map.put((nums[i]),1);
        //     }
        // }

        // 3. 해쉬셋
         Set<Integer> set = new HashSet<>();
        for(int i=0; i < nums.length; i++)
        {
            if (!set.add(nums[i])) {
                return true;
            }  
        }
        return false;
    }
}