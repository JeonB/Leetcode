class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<Integer> numRows1 = List.of(1);
        List<Integer> numRows2 = List.of(1,1);
        List<List<Integer>> ans = new ArrayList<>();
        if(numRows == 1){
            ans.add(numRows1);
            return ans;
        }else{
            ans.add(numRows1);
            ans.add(numRows2);
            if(numRows>2){
                for(int i = 3 ; i<numRows+1;i++){
                    int n = ans.get(i-2).size();
                    List<Integer> prevPascal = ans.get(i-2);
                    List<Integer> nextPascal = new ArrayList<>();
                    nextPascal.add(1);
                    for(int j = 0 ; j<n-1;j++){
                      nextPascal.add(prevPascal.get(j) + prevPascal.get(j+1));
                    }
                    nextPascal.add(1);
                    ans.add(nextPascal);
                }
            }
            return ans;
         }
    }
}