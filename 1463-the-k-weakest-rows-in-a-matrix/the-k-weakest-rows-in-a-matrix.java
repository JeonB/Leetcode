class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {
        int m = mat.length;
        int n = mat[0].length;
        int[] soldierCount = new int[m];
        
        
        for (int i = 0; i < m; i++) {
            int count = 0;
            for (int j = 0; j < n; j++) {
                if (mat[i][j] == 1) {
                    count++;
                } else {
                    break;  // 병사는 왼쪽에만 있으므로 0이 나오면 이후는 전부 0임
                }
            }
            soldierCount[i] = count;
        }
        
        PriorityQueue<int[]> pq = new PriorityQueue<>(
            (soldiersA, soldiersB) -> soldiersA[0] != soldiersB[0] ? Integer.compare(soldiersA[0], soldiersB[0]) : Integer.compare(soldiersA[1], soldiersB[1])
        );
        
        for (int i = 0; i < m; i++) {
            pq.offer(new int[]{soldierCount[i], i});
        }
        
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = pq.poll()[1];
        }
        
        return result;
    }
}