//Post-order
/*

1) Traverse the left subtree by recursively calling the post-order function.
2) Traverse the right subtree by recursively calling the post-order function.
3) Return the root node value.



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

function post_order(root, nodes) {
    if (root && root.left) {
        post_order(root.left, nodes);   
    }
    if (root && root.right) {
        post_order(root.right, nodes);  
    }
    // post_order => [ D, E, B, C, A ]
    nodes.push(root.val);
    return nodes;
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

console.log(post_order(root, [])); // => [ D, E, B, C, A ]