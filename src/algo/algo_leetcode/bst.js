//Binary Search Tree
//Now you need to understand the structure of a binary search tree. 
// For every node value in the left is smaller than the value of the node 
// and value at the right is higher than the value of the root.


function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
  }
   
  function BinarySearchTree(){
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

