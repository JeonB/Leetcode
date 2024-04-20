/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    const row = land.length;
    const column = land[0].length;
    const ans = [];

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (land[i][j] === 1) {
                let right = j;
                let bottom = i;

                // Find the bottom-right corner of the farmland
                while (right < column && land[i][right] === 1) right++;
                while (bottom < row && land[bottom][j] === 1) bottom++;

                // Mark visited land as 0
                for (let r = i; r < bottom; r++) {
                    for (let c = j; c < right; c++) {
                        land[r][c] = 0;
                    }
                }

                // Store the coordinates of the farmland
                ans.push([i, j, bottom - 1, right - 1]);
            }
        }
    }

    return ans;
};
