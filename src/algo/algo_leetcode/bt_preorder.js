//A pre-order traversal on a tree performs the following steps starting from the root:

/*

1) Return the root node value.
2) Traverse the left subtree by recursively calling the pre-order function.
3) Traverse the right subtree by recursively calling the pre-order function.

*/

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

function pre_order(root, result) {
    result.push(root.val);
    if (root && root.left) {
        pre_order(root.left, result);   
    }
    if (root && root.right) {
        pre_order(root.right, result);  
    }
    return result;
}

var n11 = new TreeNodeWrapper(a,3,4);
var n22 = new TreeNodeWrapper(2,4,3);

var n33 = new TreeNodeWrapper(1,n11,n22);

console.log(pre_order(n33, [])); // => [ A, B, D, E, C ]


// create nodes
var root = new TreeNode('A');
var n1 = new TreeNode('B');
var n2 = new TreeNode('C');
var n3 = new TreeNode('D');
var n4 = new TreeNode('E');

// setup children
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;
console.log(pre_order(root, [])); // => [ A, B, D, E, C ]