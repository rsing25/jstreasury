//et’s start with defining a structure that represent a node.
var node = function(v, c) {
  return {
    value : v,
    children : c
  };
};

// let’s put that aside and create a tree.
var node5 = node("node5");
var node4 = node("node4");
var node3 = node("node3");
var node2 = node("node2", [node5]);
var node1 = node("node1", [node3, node4]);
var graph = node("root", [node1, node2]);


//treehe tree is simple. It has a single root element that has 2 childrens : node 1 and node 2. 
//Node a has two children : node 3 and 4. 
//If we move back to the root, the second children, node 2, has only a single child : node 5.


function breadthFirstRecursive(queue, callback){
  if (queue.length === 0){
    return;
  }
  var node = queue.shift();
  callback(node);
  if(node.children){
    for(var i = 0 ; i < node.children.length; i++){
      var child = node.children[i];
      if(!child.hasBeenVisited){
        child.hasBeenVisited = true;
        queue.push(child);
      }
    }
  }
  breadthFirstRecursive(queue, callback);
}


//The algorithm starts by looking at the queue to be sure that we still have something to proceed. 
//If that’s the case, we take the first element from the left. 
//This is important because children will be pushed in the queue 
//and that we do not want to visit them until we are done with all siblings of the level. 
//The last piece of code is the invocation where we put the root in the queue to be proceeded.

var queue = [];
queue.push(graph);
breadthFirstRecursive(queue, function(node){
  console.log(node.value);
});

//This output : Root, Node1, Node2, Node3, Node4, Node5

