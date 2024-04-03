/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var visited = [[]];
var exist = function(board, word) {
    visited = Array.from({ length: board.length }, () => [false]);
    for(let i = 0 ; i<board.length ; i++){
        for(let j = 0 ; j<board[i].length ; j++){

            if(word.charAt(0) === board[i][j] && search(board, word, i, j ,0))
                return true;
        }
    }

    return false;
};

function search(board, word, i, j, index){
    if(index === word.length){
        return true;
    }

    if(i>= board.length || i< 0 || j>= board[i].length || j<0 || board[i][j] !== word.charAt(index) || visited[i][j]){
        return false;
    }

    visited[i][j] = true;
    if(search(board, word, i-1, j, index+1) || 
           search(board, word, i+1, j, index+1) ||
           search(board, word, i, j-1, index+1) || 
           search(board, word, i, j+1, index+1)){
            return true;
    }

    visited[i][j] = false;
    return false;
}