// Given two binary trees, write a function to check if they are equal or not.
//
//
// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.


/**
 * Definition for a binary tree node.*/
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}


var isSameTree = function(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (!left.val && !right.val && left !== right) {
        return false;
    }
    if (left.val && right.val && left.val !== right.val) {
        return false;
    }
    return isSameTree(left.left, right.left) && isSameTree(left.right, right.right);
};

var n1 = new TreeNode(2,3,4);
var n2 = new TreeNode(2,3,4);

console.log( isSameTree(n1, n2) );