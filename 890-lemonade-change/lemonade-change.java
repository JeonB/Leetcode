class Solution {
    // 손님은 오직 하나의 레몬에이드만 구매함. 5달러
    // 잔돈 없는 상태로 시작
    public boolean lemonadeChange(int[] bills) {
        
        if(bills[0] > 5)
            return false;

        int[] change = new int[2];
        
        for(int bill : bills){

            if(bill == 5){
                change[0]++;
            }
            else if(bill == 10){
                if(change[0]>0){
                    change[1]++;
                    change[0]--;
                }else{
                    return false;
                }
            }else{
                if(change[0]>0 && change[1]>0){
                    change[0]--;
                    change[1]--;
                }
                else if(change[0]>2){
                    change[0]-=3;
                }else{
                    return false;
                }
            }
        }

        return true;
    }
}