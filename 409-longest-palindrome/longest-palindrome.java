class Solution {
    public int longestPalindrome(String s) {
        int[] charCounts = new int[128]; // ASCII 문자 범위
        
        // 문자열에서 각 문자의 출현 빈도를 카운팅
        for (char c : s.toCharArray()) {
            charCounts[c]++;
        }
        
        int length = 0;
        boolean hasOddCount = false;
        
        // 카운트된 문자들로부터 팰린드롬 길이 계산
        for (int count : charCounts) {
            length += count / 2 * 2; // 각 문자의 출현 빈도 중 짝수 개를 팰린드롬 길이에 추가
            if (count % 2 == 1) { // 홀수 개의 문자가 있다면
                hasOddCount = true; // 홀수 개의 문자가 있음을 표시
            }
        }
        
        // 홀수 개의 문자가 있을 경우 가운데 하나를 추가하여 팰린드롬 길이를 홀수로 만듦
        if (hasOddCount) {
            length++;
        }
        
        return length;
    }
}