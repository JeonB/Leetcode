class Solution {
    public int romanToInt(String s) {
        HashMap<Character, Integer> roma = new HashMap<>();
        roma.put('I', 1);
        roma.put('V', 5);
        roma.put('X', 10);
        roma.put('L', 50);
        roma.put('C', 100);
        roma.put('D', 500);
        roma.put('M', 1000);

        int beforeNum = roma.get(s.charAt(0));
        int ans = roma.get(s.charAt(0));
        for(int i = 1 ; i< s.length() ; i++){
            if(beforeNum <  roma.get(s.charAt(i)) ){
                ans -= beforeNum;
                ans += (roma.get(s.charAt(i)) - beforeNum);
            }else{
                ans += roma.get(s.charAt(i));
            }
       
            beforeNum = roma.get(s.charAt(i));
        }

        return ans;
    }
}