class Solution {
    public int longestPalindrome(String s) {
           if(s.length() == 1)
            return 1;
        char[] charArray = s.toCharArray();
        Arrays.sort(charArray);
        // String sortedStr = new String(charArray);
        int cnt = 1;
        int ans = 0;
        for(int i = 0 ; i<s.length()-1 ; i++){
            
            if(charArray[i] == charArray[i+1])
                cnt++;   
            else{
                if(cnt % 2 == 0){
                    ans+=cnt;
                }
                else{
                    ans+=(cnt-1);
                    }
                cnt = 1;  
            }
        }
      
        ans+=cnt;
        
        if(ans % 2 == 0 && ans<s.length())
            return ++ans;
        return ans;
    }
}