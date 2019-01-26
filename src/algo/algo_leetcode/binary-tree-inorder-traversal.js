// Given a binary tree, return the inorder traversal of its nodes' values.
//
//
// For example:
// Given binary tree [1,null,2,3],
//
//    1
//     \
//      2
//     /
//    3
//
//
//
// return [1,3,2].
//
//
// Note: Recursive solution is trivial, could you do it iteratively?


function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}


var dfs = function (result, node) {
    if (!node) return ;
    dfs(result, node.left);
    result.push(node.val);
    dfs(result, node.right);
    return ;
};
var inorderTraversal = function(root) {
    console.log(JSON.stringify(root));
    var result = [];
    dfs(result, root);
    return result;
};

var n1 = new TreeNode(2,3,4);
var n2 = new TreeNode(2,4,3);

var n3 = new TreeNode(1,n1,n2);
console.log( inorderTraversal(n3) );