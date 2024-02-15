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
                    
                    int n = pascal.get(i-2).size();
                    List<Integer> prevPascal = pascal.get(i-2);
                    List<Integer> addPascal = new ArrayList<>();
                    addPascal.add(1);
                    for(int j = 0 ;j< n-1;j++){
                        addPascal.add(prevPascal.get(j) + prevPascal.get(j+1));
                    }
                    addPascal.add(1);
                    pascal.add(addPascal);
                }
                // System.out.println(pascal.get(1).toString());
            }
            return pascal;
        }
    }
}