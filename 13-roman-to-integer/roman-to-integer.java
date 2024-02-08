import java.util.*;
class Solution {
    public int romanToInt(String s) {
       int ans = 0;
       int prev = 0;
       Map<Character,Integer> hash = new HashMap<>();
        hash.put('I', 1);
        hash.put('V', 5);
        hash.put('X', 10);
        hash.put('L', 50);
        hash.put('C', 100);
        hash.put('D', 500);
        hash.put('M', 1000);
        for(int i=s.length()-1; i>=0; i--){
            int num = hash.get(s.charAt(i));
            if(prev>num){
                ans -= num;
            }
            else{
                ans += num;
            }
            prev = num;
        }
        return ans;
    }
}