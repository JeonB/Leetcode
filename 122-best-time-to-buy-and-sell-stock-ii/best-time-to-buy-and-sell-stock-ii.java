class Solution {
    public int maxProfit(int[] prices) {
        int maximumProfit = 0;
        int stock = 0;
        for(int i = 0 ; i < prices.length - 1 ; i++){
            
            if(prices[i+1] > prices[i]){
                maximumProfit += prices[i+1] - prices[i];
            }
        }
        return maximumProfit;
    }
}