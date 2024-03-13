class Solution {
    public int countSubstrings(String s) {
        int[][] subPalin = new int[s.length()][s.length()];
        int ans = 1;
        subPalin[s.length() - 1][s.length() - 1] = 1;

        for(int i = 0 ; i< s.length() - 1 ; i++){
            subPalin[i][i] = 1;
            ans+=1;
            if(s.charAt(i)  == s.charAt(i+1)){
                subPalin[i][i + 1] = 1;
                ans+=1;
            }
        }
        
        if(s.length() > 2){
            
            for(int len = 2 ; len < s.length() ; len++){

                for(int i = 0 ; (i+len)< s.length() ; i++ ){
                    if(s.charAt(i) == s.charAt(i+len)){
                        subPalin[i][i+len] = subPalin[i+1][i+len-1];
                        ans += subPalin[i][i+len]; // subPalin[1][1]
                    }
                }
                
            }

        }
        
        return ans;
    }
}