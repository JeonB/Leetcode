class Solution {
    public int countSubstrings(String s) {
        int n = s.length();
        if(n<2)
            return n;
        
        int ans = n;
        boolean[][] palindrome = new boolean[n][n];

        for(int i = 0 ; i < n; i++){
            palindrome[i][i] = true;
            if(i < n-1 && s.charAt(i) == s.charAt(i+1)){
                palindrome[i][i+1] = true;
                ans++;
            }
        }

        if(n > 2){
            for(int len = 3 ; len < n + 1; len++){
                for(int i = 0 ; i < n- len +1; i++)
                    if(palindrome[i + 1][i + len - 2] && s.charAt(i) == s.charAt(i + len - 1)){
                        palindrome[i][i + len - 1] = true;
                        ans++;
                    }
            }
        }
        

        return ans;
    }
}