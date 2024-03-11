class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        if(m == 0){
            for(int i = 0 ; i<n ; i++){
                nums1[i] = nums2[i];
            }
        }else if(n == 0 && n == 0){
                nums1 = null;    
        }else{
            
            int i = m;
            int j = 0;
            while(i < m + n){
                
                nums1[i] = nums2[j];
                j++;
                i++;
            }

            Arrays.sort(nums1);    
        }
        
    }
}