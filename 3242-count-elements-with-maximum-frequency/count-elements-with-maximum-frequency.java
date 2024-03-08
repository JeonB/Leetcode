class Solution {
    public int maxFrequencyElements(int[] nums) {
        
        // HashMap<Integer, Integer> mp = new HashMap<>();
        // for (int num : nums) {
        //     mp.put(num, mp.getOrDefault(num, 0) + 1);
        // }

        // int count = 0;
        // int maxFreq = Integer.MIN_VALUE;
        // for (int freq : mp.values()) {
        //     maxFreq = Math.max(maxFreq, freq);
        // }

        // for (int freq : mp.values()) {
        //     if (freq == maxFreq)
        //         count += maxFreq;
        // }
        // return count;
        if(nums.length == 1)
            return 1;
        int element = 1;
        ArrayList<Integer> list = new ArrayList<>();
        Arrays.sort(nums);
        int ans = 0;
        for(int i = 1 ; i<nums.length ; i++){
            
            if(nums[i] != nums[i - 1]){
                list.add(element);
                element = 1;
            }else{
                element++;
            }
        }
        list.add(element);

        Collections.sort(list);
        if(list.size() == 1)
            return list.get(0);
        for(int i =list.size() - 1 ; i > 0 ; i--){
            ans+=list.get(i);
            if(list.get(i) > list.get(i-1)){
                break;
            }
            else if( i == 1 && list.get(i) == list.get(i-1))
                ans+=list.get(i);
        }
        return ans;
    }
    
}