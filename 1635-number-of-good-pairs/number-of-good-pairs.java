class Solution {
    public int numIdenticalPairs(int[] nums) {
     int ans = 0, cnt[] = new int[101];
        for (int i: nums) {
            ans += cnt[i]++;
        }
        return ans;
    }
}