//An in-order traversal on a tree performs the following steps starting from the root:

/*
1) Traverse the left subtree by recursively calling the in-order function.
2) Return the root node value.
3) Traverse the right subtree by recursively calling the in-order function.

//     A
//    / \
//   B   C
//  / \ 
// D  E 
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

function in_order(root, result) {
    if (root && root.left) {
        console.log("root.left calling  --> "+root.left.val);
        in_order(root.left, result);   
    }
    console.log("root.val --> "+root.val);

    // in_order => [ D, B, E, A, C ]
    result.push(root.val);
    if (root && root.right) {
        console.log("root.right calling  --> "+root.right.val);
        in_order(root.right, result);  
    }
    return result;
}

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
console.log(in_order(root, [])); // => [ D, B, E, A, C ]
