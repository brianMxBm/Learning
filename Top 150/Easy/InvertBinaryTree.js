//https://leetcode.com/problems/invert-binary-tree/?envType=study-plan-v2&envId=top-interview-150

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
 * @return {TreeNode}
 */

/*
@SEE: In order to solve this problem, we must understand what an inverse in this context menas, it's just mirroring the left and right subtrees.

We must recognize a few base cases:

We will utilize recursion that uses pre order traversal starting with the root.

1. When a node is null we want to return nothing
2. We continue our recursive calls on the left nodes first until we reach a leaf node.
3. We contuinue our recursive calls on the right nodes next until we reach a left node
4. We then create a temp node and set it to the left node, then set the right node to the left node.

*/

var invertTree = function (root) {
  if (!root) {
    return null;
  }

  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  return root;
};
