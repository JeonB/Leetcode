class Solution {
    public List<List<Integer>> generate(int numRows) {
        // f(1) = 1 , f(2) = 2 
        // 계산된 리스트를 계속 저장해야함
        List<List<Integer>> pascal = new ArrayList<>();
        if(numRows == 1){
            pascal.add(new ArrayList<>(List.of(1)));
            return pascal;
        }
        else{
            pascal.add(new ArrayList<>(List.of(1)));
            pascal.add(new ArrayList<>(List.of(1, 1)));

            if(numRows>2){
               
                for(int i=3 ; i<numRows+1; i++){
                    
                    
                    List<Integer> prevPascal = pascal.get(i-2);
                    int n = prevPascal.size();

                    List<Integer> nextPascal = new ArrayList<>();

                    nextPascal.add(1);
                    for(int j = 0 ;j< n-1;j++){
                        nextPascal.add(prevPascal.get(j) + prevPascal.get(j+1));
                    }
                    nextPascal.add(1);

                    pascal.add(nextPascal);
                }
                // System.out.println(pascal.get(1).toString());
            }
            return pascal;
        }
    }
}