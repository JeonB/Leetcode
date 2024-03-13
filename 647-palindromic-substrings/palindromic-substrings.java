class Solution {
    public int countSubstrings(String s) {
        if( s.length() < 2)
            return 1;

        int[][] subPalin = new int[s.length()][s.length()];
        int ans = s.length();

        for(int i = 0 ; i< s.length(); i++){
            subPalin[i][i] = 1;
            if(i < s.length() - 1 &&  s.charAt(i)  == s.charAt(i+1)){
                subPalin[i][i + 1] = 1;
                ans++;
            }
        }
        
        if(s.length() > 2){
            
            for(int len = 2 ; len < s.length() ; len++){

                for(int i = 0 ; (i+len)< s.length() ; i++ ){
                    if( subPalin[i+1][i+len-1] > 0 && s.charAt(i) == s.charAt(i+len)){
                        subPalin[i][i+len] = 1;
                        ans++; // subPalin[1][1]
                    }
                }
                
            }

        }
        
        return ans;
    }
}