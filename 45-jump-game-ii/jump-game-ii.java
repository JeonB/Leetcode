class Solution {
    public int jump(int[] nums) {
        // 재귀를 활용하여 풀이?
        // 첫 시작은 무조건 nums[0]. nums[0] 보다 작거나 같은 수에 해당하는 만큼 점프
        // 예를 들어, nums[0]가 3이면 0에서 1,2,3 만큼 점프한 값의 nums 값중 최댓값을 구해야 함
        int curEnd = 0;
        int maxJump = 0;
        int jump = 0;
        
        for(int i = 0 ; i<nums.length - 1 ; i++){
                maxJump = Math.max(maxJump,i + nums[i]);
                
                if(i == curEnd){
                    jump++;
                    curEnd = maxJump;

                    if( curEnd >= nums.length -1)
                        break;
                }
              
            }
            
        

        return jump;
    }
}