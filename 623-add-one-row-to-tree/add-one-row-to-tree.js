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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {

    if(depth === 0 || depth === 1){
        let newRoot = new TreeNode(val);
        newRoot.left = depth === 1 ? root : null;
        newRoot.right = depth=== 0 ? root : null;
        return newRoot
    }
    
    if(root!== null && depth > 1){
           root.left = addOneRow(root.left, val, depth > 2 ? depth- 1 : 1)
           root.right = addOneRow(root.right, val, depth > 2 ? depth - 1 : 0)
    }
    return root
    
};