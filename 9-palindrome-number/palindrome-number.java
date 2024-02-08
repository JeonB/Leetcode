class Solution {
    public boolean isPalindrome(int x) {
        String s = Integer.toString(x);
        boolean answer = true;
        for(int i =0; i<s.length();i++){
            if(s.charAt(i) != s.charAt(s.length()-1-i)){
                answer = false;
                break;
            }
                
        }
        return answer;
    }
}