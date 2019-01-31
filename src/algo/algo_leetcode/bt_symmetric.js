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

function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function TreeNodeWrapper(val, left, right) {
  var node = new TreeNode(val);
   if(left != null) {
       if(left instanceof TreeNode) {
          node.left = left;
       } else {
          node.left = new TreeNode(left);
       }
   }
   if (right != null) {
      if(right instanceof TreeNode) {
          node.right = right;
       } else {
          node.right = new TreeNode(right);
       }     
  }
   return node;
}

var isSame = function (left, right) {
  if (!left && !right) return true;
  if (!left || !right) {
    return false;
  }
  if (left.val && right.val && left.val !== right.val) {
    return false;
  }
  // if (!left.val && !right.val && left !== right) {
  //   return false;
  // }
  return isSame(left.left, right.right) && isSame(left.right, right.left);
};


var isSymmetric = function(root) {
  console.log(JSON.stringify(root));
  if (!root) return true;
  return isSame(root.left, root.right);
};
var n0 = new TreeNodeWrapper(2,3,4);

console.log("n0 "+ isSymmetric(n0) );

var n1 = new TreeNodeWrapper(2,3,4);
var n2 = new TreeNodeWrapper(2,4,3);

var n3 = new TreeNodeWrapper(1,n1,n2);
console.log("n3 "+ isSymmetric(n3) );


var n4 = new TreeNodeWrapper(2,null,3);

var n5 = new TreeNodeWrapper(1,n4,n4);
console.log("n5 "+ isSymmetric(n5) );

