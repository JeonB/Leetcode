/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    return dfs(root, "");
    
    function dfs(node, currentPath) {
        if (!node) return "감시값" 
        
        const newPath = String.fromCharCode(97 + node.val) + currentPath 
    
        if (!node.left && !node.right) return newPath
    
        const leftPath = dfs(node.left, newPath)
        const rightPath = dfs(node.right, newPath)
    
        // Return the smaller path between left and right
        if (leftPath < rightPath) {
            return leftPath
        } else {
            return rightPath
        }
    }
}
