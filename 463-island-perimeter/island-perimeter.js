/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let sum = 0

    for(let i = 0 ; i < grid.length ; i++){
            for(let j = 0 ; j < grid[i].length ; j++){
                if(grid[i][j] === 1){
                    sum += 4
                    if(j < grid[i].length -1 && grid[i][j+1] === 1)
                        sum -= 1
                    if(j > 0  && grid[i][j-1] === 1)
                        sum -= 1
                    if(i < grid.length -1  && grid[i+1][j] === 1)
                        sum -= 1   
                    if(i > 0 && grid[i-1][j] === 1)
                        sum -= 1
                }                                                
        }
    }
    return sum
   
};