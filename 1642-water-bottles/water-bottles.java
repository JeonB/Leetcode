class Solution {
    public int numWaterBottles(int numBottles, int numExchange) {
        int answer = numBottles;

        while(numExchange <= numBottles){
            int exchangedBottles = numBottles/numExchange;
            answer += exchangedBottles;
            numBottles = numBottles - numExchange * exchangedBottles + exchangedBottles;
        }

        return answer;
    }
}