class Solution {
    public int[] kWeakestRows(int[][] mat, int k) {
        int m = mat.length;
        int n = mat[0].length;
        int[] soldierCount = new int[m];
        
        // 각 행의 병사 수를 계산합니다.
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
        
        // 우선순위 큐를 사용하여 행을 병사 수와 행 번호로 저장합니다.
        PriorityQueue<int[]> pq = new PriorityQueue<>(
            (a, b) -> a[0] != b[0] ? Integer.compare(a[0], b[0]) : Integer.compare(a[1], b[1])
        );
        
        for (int i = 0; i < m; i++) {
            pq.offer(new int[]{soldierCount[i], i});
        }
        
        // 결과 배열에 가장 약한 k개의 행의 인덱스를 저장합니다.
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = pq.poll()[1];
        }
        
        return result;
    }
}