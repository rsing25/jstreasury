//A level-order traversal on a tree performs the following steps starting from the root:


/*

1) Add the root to a queue.
2) Pop the last node from the queue, and return its value.
3) Add all children of popped node to queue, and continue from step 2 until queue is empty.

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

function level_order(root, result) {
    var queue = [root];
    console.log("queue "+JSON.stringify(queue));
    while (queue.length > 0) {
        // front of queue is at element 0 and we push elements to back of queue
        var n = queue.shift();
        console.log("n after shit() "+JSON.stringify(n));

        result.push(n.val);
        if (n.left !== null) { queue.push(n.left); }
        if (n.right !== null) { queue.push(n.right); }
    console.log("queue-- "+JSON.stringify(queue));
 
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
console.log(level_order(root, [])); // => [ A, B, C, D, E ]
