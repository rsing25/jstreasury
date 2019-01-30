// https://github.com/loatheb/leetcode-javascript
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
//
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3]  is not:
//
//     1
//    / \
//   2   2
//    \   \
//    3    3
// Note:
// Bonus points if you could solve it both recursively and iteratively.


/**
 * Definition for a binary tree node.*/
function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}

var isSame = function (left, right) {
  if (!left && !right) return true;
  if (!left || !right) {
    return false;
  }
  if (!left.val && !right.val && left !== right) {
    return false;
  }
  if (left.val && right.val && left.val !== right.val) {
    return false;
  }
  return isSame(left.left, right.right) && isSame(left.right, right.left);
};
var isSymmetric = function(root) {
  console.log(JSON.stringify(root));
  if (!root) return true;
  return isSame(root.left, root.right);
};
var n0 = new TreeNode(2,3,4);

console.log( isSymmetric(n0) );

var n1 = new TreeNode(2,3,4);
var n2 = new TreeNode(2,4,3);

var n3 = new TreeNode(1,n1,n2);
console.log( isSymmetric(n3) );


var n4 = new TreeNode(2,null,3);

var n5 = new TreeNode(1,n4,n4);
console.log( isSymmetric(n5) );

// var n1 = new TreeNode(2,3,3);
// var n1 = new TreeNode(2,4,4);

// var n2 = new TreeNode(1,n1,n2);
// console.log( isSymmetric(n2) );
