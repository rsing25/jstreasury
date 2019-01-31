// Given two binary trees, write a function to check if they are equal or not.
//
//
// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.


/**
 * Definition for a binary tree node.*/

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function TreeNodeWrapper(val, left, right) {
    var node = new TreeNode(val);
     if(left != null) {
        node.left = new TreeNode(left);
     }
     if (right != null) {
        node.right = new TreeNode(right);
     }
     return node;
}

var isSameTree = function(left, right) {
    if (!left && !right) return true;
    if (!left || !right) return false;
    if (left.val && right.val && left.val !== right.val) {
        return false;
    }
    // if (!left.val && !right.val && left !== right) {
    //     return false;
    // }

    return isSameTree(left.left, right.left) && isSameTree(left.right, right.right);
};

var n1 = new TreeNodeWrapper(2,3,4);
var n2 = new TreeNodeWrapper(2,3,4);

console.log( isSameTree(n1, n2) );

var n3 = new TreeNodeWrapper(2,3,4);
var n4 = new TreeNodeWrapper(2,3,5);

console.log( isSameTree(n3, n4) );