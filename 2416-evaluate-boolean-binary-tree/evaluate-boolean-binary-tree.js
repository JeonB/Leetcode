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
 * @return {boolean}
 */
var evaluateTree = function(root) {
    
    if(root.left === null && root.right === null){
        if(root.val === 0) return false;
        return true;
    }
    const left = evaluateTree(root.left)
    const right = evaluateTree(root.right)
    
    if(root.val === 2) return left || right
    return left && right
}