class Solution {
    public int findContentChildren(int[] g, int[] s) {
        int ans = 0;
        Arrays.sort(g);

        if(s.length == 0) 
            return 0;
                       
        Arrays.sort(s);
        int i = 0;



        //g 235 s 123
        for(int j = 0 ; j<s.length ;j++){
            if(i<g.length && g[i]<=s[j]){
                ans++;
                i++;
            }
            
        }

        return ans;
    }
}