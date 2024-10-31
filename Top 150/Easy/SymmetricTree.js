//https://leetcode.com/problems/symmetric-tree/?envType=study-plan-v2&envId=top-interview-150

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

/*
@SEE: Essentially this problem is asking us to determine if the entire tree is symmetric. What this means is that a left sub tree and right tree's children must adhere to
1. leftTree's root.left is equal to rightTree's root.right
2. If a root doesn't have right or left children it's symmetrical
3. If a root has either left or right but not both then it's not symmetrical.

We want to start with root's right and left subtrees recurisvley checking this logic.
We chain three conditions. 

1. The first condition allows us to see of the left value of the left subtree's root is equal to the right value of the right subtree's root.
2. If it is then compare the left subtree's left subtree (if any) and the right subtree's right subtree (if any) 
3 If it is then compare the left subtree's right subtree (if any) and the right subtree's left subtree (if any)




*/

var isSymmetric = function (root) {
  function isMirror(nodeA, nodeB) {
    if (!nodeA && !nodeB) {
      return true;
    }

    if (!nodeA || !nodeB) {
      return false;
    }

    return (
      nodeA.value === nodeB.value &&
      isMirror(nodeA.left, nodeB.right) &&
      isMirror(nodeA.right, nodeB.left)
    );
  }

  return isMirror(root.left, root.right);
};
