class Solution {
    int[] arr;
    public int climbStairs(int n) {
        if(n<3)
            return n;
            
        //한번에 한 계단 혹은 두 계단만 오를 수 있는 n개의 계단 오르는 경우의 수
        arr = new int[n+1];
        
        
        
        return pivonazi(n);
    }

    public int pivonazi(int n){
        arr[1] = 1;
        arr[2] = 2;
        
        for(int i = 3 ; i<n+1; i++){
            arr[i] = arr[i-1]+arr[i-2];
        }
        return arr[n];
    }
}