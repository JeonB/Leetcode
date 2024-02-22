class Solution {
    public int findContentChildren(int[] g, int[] s) {
             if(s.length == 0) 
            return 0;

        Arrays.sort(g);
        Arrays.sort(s);
        int ans = 0;
        int i = 0;

        for(int j = 0 ; j<s.length ;j++){
            if(i<g.length && g[i]<=s[j]){
                ans++;
                i++;
            }
            
            if(i >= g.length)
                return ans;
        }

        return ans;
    
    }
}