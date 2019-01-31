//A pre-order traversal on a tree performs the following steps starting from the root:

/*

1) Return the root node value.
2) Traverse the left subtree by recursively calling the pre-order function.
3) Traverse the right subtree by recursively calling the pre-order function.

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

function pre_order(root, result) {
    console.log("root.val --> "+root.val);

    // pre_order post_order => [ A, B, D, E, C ]
    result.push(root.val);
    if (root && root.left) {
        console.log("root.left calling  --> "+root.left.val);
        pre_order(root.left, result);   
    }
    if (root && root.right) {
        console.log("root.right calling  --> "+root.right.val);
        pre_order(root.right, result);  
    }
    return result;
}

// var n11 = new TreeNodeWrapper(2,3,4);
// var n22 = new TreeNodeWrapper(2,4,3);

// var n33 = new TreeNodeWrapper(1,n11,n22);

// console.log(pre_order(n33, [])); 


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