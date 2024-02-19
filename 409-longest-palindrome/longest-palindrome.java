class Solution {
    public int longestPalindrome(String s) {
        
        if(s.length() == 1)
            return 1;
        char[] charArray = s.toCharArray();
        Arrays.sort(charArray);
        String sortedStr = new String(charArray);

        int samechar = 1;
        int ans = 0;
        for(int i = 0 ; i<s.length()-1 ; i++){
            
            if(sortedStr.charAt(i) == sortedStr.charAt(i+1))
                samechar++;   
            else{
                if(samechar % 2 == 0)
                    ans+=samechar;
                else
                    ans+=(samechar-1);
                
                samechar = 1;  
            }
        }
      
        ans+=samechar;
        
        if(ans % 2 == 0 && ans<s.length())
            return ++ans;
        return ans;

    }
}