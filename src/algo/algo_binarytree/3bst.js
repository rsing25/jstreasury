//Binary Search Tree
//Now you need to understand the structure of a binary search tree. 
// For every node value in the left is smaller than the value of the node 
// and value at the right is higher than the value of the root.


  function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
   
  function BinarySearchTree() {
    this.root = null;
  }
  
  BinarySearchTree.prototype.push = function(val) {
    var root = this.root;
    if(root == null) {
        this.root = new Node(val);
        return;
    }
    var currentNode = root;
    var newNode = new Node(val);

    while(currentNode) {
        if(val < currentNode.value) {
            if(!currentNode.left) {
               currentNode.left = newNode;
               break; 
            } else {
                currentNode = currentNode.left
            }
        } else {
            if(!currentNode.right) {
               currentNode.right = newNode;
               break; 
            } else {
                currentNode = currentNode.right;
            }
        }
    }
  }
  

var bst = new BinarySearchTree();
bst.push(3);
bst.push(2);
bst.push(4);
bst.push(1);
bst.push(5);

console.log(JSON.stringify(bst));


function minNode(node){
    if(!node){
       return 0;
    }
    if(node.left){
      return minNode(node.left)
   }
   return node.value
 }
 console.log(minNode(bst.root));

 function maxNode(node){
    if(!node){
      return 0;
   }
   if(node.right){
      return maxNode(node.right)
   }
   return node.value;
 }

 console.log(maxNode(bst.root));

 function isBST(node){
    if(!node){
      return true; 
   }
 
   if(node.left != null && node.left.value > node.value){ 
     return false;
   }
 
   if(node.right !=null && node.right.value < node.value) {
     return false;
   }
 
   if(!isBST(node.left) || !isBST(node.right)) {
     return false;
   }
 
   return true;  
 }

 console.log(isBST(bst.root));


 function height(node){
    if(!node) return 0;
    var leftHeight = height(node.left);
    var rightHeight = height(node.right);
 
    return Math.max(leftHeight, rightHeight) + 1;
 }

 console.log(height(bst.root));

