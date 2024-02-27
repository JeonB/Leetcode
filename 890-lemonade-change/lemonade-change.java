class Solution {
    // 손님은 오직 하나의 레몬에이드만 구매함. 5달러
    // 잔돈 없는 상태로 시작
      public boolean lemonadeChange(int[] bills) {
        int five = 0, ten = 0;
        for (int i : bills) {
            if (i == 5) five++;
            else if (i == 10) {five--; ten++;}
            else if (ten > 0) {ten--; five--;}
            else five -= 3;
            if (five < 0) return false;
        }
        return true;
    }
}