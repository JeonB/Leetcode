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
    
    function dfs(node, path) {
        if (!node) return "|"; // If the node is null, return a sentinel value
        
        // Append the current node's value to the path
        let newPath = String.fromCharCode(97 + node.val) + path;
        
        // If the node is a leaf, return the constructed path
        if (!node.left && !node.right) return newPath;
        
        // Recursively find the smallest path from the left and right subtrees
        let leftPath = dfs(node.left, newPath);
        let rightPath = dfs(node.right, newPath);
        
        // Return the smaller path between left and right
        return leftPath < rightPath ? leftPath : rightPath;
    }
};
