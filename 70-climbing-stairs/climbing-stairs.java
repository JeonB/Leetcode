class Solution {
    public int climbStairs(int n) {
        // n =1 > 1, n=2 > 2 , n=3 > 3, n=4 > 5
        if(n == 1)
            return 1;
        else if(n==2)
            return 2;
        else{
            int ans = 0;
            int prevValue = 2;
            int prevValue2 = 1;
            for(int i = 2 ; i<n;i++){
                ans = prevValue + prevValue2;
                prevValue2 = prevValue;
                prevValue = ans;
            }
            return ans;
        }
    }
}