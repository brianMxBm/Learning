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
 * @return {number}
 */

/* @SEE: Very simple solution using recursive DFS. We don't define a stack but we're using the runtime function stack (refer to JS Execution Context).

We have a base case of checking if the root node doesn't exist. Otherwise, check the left subtree until we reach a null node (base case).
Each recursive call we obtain the current level from a Math.Max of the current respective root. 

*/

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  const leftMaxTree = maxDepth(root.left);
  const rightMaxTree = maxDepth(root.right);

  return Math.max(leftMaxTree, rightMaxTree) + 1;
};
