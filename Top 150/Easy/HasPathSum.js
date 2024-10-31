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
 * @param {number} targetSum
 * @return {boolean}
 */

/*
@SEE: Run on leetcode. In this instance we're asked to find the path from a root node to a leaf node (leaf nodes have no children). 
Since the structure of the data isn't a binary search tree (in which data is sorted respective to the root node, left is less than parent node 
right is greater than parent node and so on), we have to check every single route. This calls for DFS, specifically recursive DFS. In this case
we have cases:

1. We want to ensure we dont have an empty list (or no nodes)
2. We want to check that our node is a leaf node by checking there's no left or right nodes. If it is then check if we found a match sum. If so return true
3. Otherwise we'd like to continue the DFS recursivley, this gets done for every single node. We use an OR statement since if a node is ever null it false gets returned
but if there's a value on the right it continues, etc. If no more nodes are found then we return false if we didnt find our target sum

*/

var hasPathSum = function (root, targetSum) {
  var dfs = function (root, current) {
    if (!root) {
      return false;
    }

    currSum += node.val;

    if (!root.left && !root.right) {
      return targetSum === currSum;
    }

    return (
      dfs(root.left, current + root.val) && dfs(root.right, current + root.val) //@SEE: This can be confusing but we're just ensuring that we've visited all nodes.
    );
  };

  return dfs(root, 0);
};
