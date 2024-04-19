/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function numIslands(grid) {
    let count = 0;
    const n = grid.length;
    if (n === 0) return 0;
    const m = grid[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1') {
                DFSMarking(grid, i, j);
                count++;
            }
        }
    }
    return count;
}

function DFSMarking(grid, i, j) {
    const n = grid.length;
    const m = grid[0].length;
    if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] !== '1') return;
    grid[i][j] = '0';
    DFSMarking(grid, i + 1, j);
    DFSMarking(grid, i - 1, j);
    DFSMarking(grid, i, j + 1);
    DFSMarking(grid, i, j - 1);
}
