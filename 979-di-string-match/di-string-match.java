class Solution {
    public int[] diStringMatch(String s) {
        int n = s.length();
        int[] ans = new int[n+1];
        int I = 0;
        int D = s.length();

        for(int i = 0; i < n ; i++){
            if(s.charAt(i) == 'I'){
                ans[i] = I;
                I++;
            }else{
                ans[i] = D;
                D--;
            }

        }
        ans[n] = D;
        return ans;
    }
}