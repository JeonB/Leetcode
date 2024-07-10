class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        for(int stone : stones){
            pq.add(stone);
        }
        while(pq.size() > 1){
            int x = pq.poll();
            int y = pq.poll();
            if( x != y){
                pq.add(x-y);
            }
        }
        return pq.size() > 0 ? pq.poll() : 0;        
    }
}