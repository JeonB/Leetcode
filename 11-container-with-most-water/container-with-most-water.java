class Solution {
    public int maxArea(int[] height) {
        
        // 가장 높은 막대기
        // 가능한 마지막 순번의 막대기
        // bruteforce는 시간제한 있음 O(n^2)
        // int ans = 0;
        // int area = 0;
        // for(int i = 0 ; i<height.length -1  ; i++){
        //     for(int j = i+1 ; j<height.length ; j++){
        //         if(height[i] > height[j]){
        //             area = (j-i) *  height[j];
        //         }else{
        //             area = (j-i) *  height[i];
        //         }

        //         if(area> ans)
        //             ans = area;
        //     }
        // }
        int ans = 0;
        int wLast = height.length - 1; // 물을 담는 최댓값 바구니의 마지막 막대 인덱스
        int wStart = 0; // 물을 담는 최댓값 바구니의 첫번째 막대 인덱스
        
        while(wStart<wLast){
            ans = Math.max(ans, (wLast-wStart) * Math.min(height[wStart],height[wLast]));
            if(height[wLast] > height[wStart])
                wStart++;
            else if(height[wLast] < height[wStart])
                wLast--;
            else{
                wStart++;
                wLast--;
            }        

        }
        
        return ans;
    }
}