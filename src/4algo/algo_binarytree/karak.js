/*
When designing web front-ends for internationalization across multiple (human) languages, what are some common concerns to keep in mind?
What is dependency injection? How does it help manage the complexity of a piece of software?
What is the difference between composition and inheritance? When would you use one over the other?
- Front-end web development
  - Building user interfaces for web services and sites.
- Object-oriented design
  - Best practices for building classes and systems of classes.
/*

Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2   4
 \ /   / \
  3   5   8
   \ / \   \
    6   7   10

Write a function that takes the graph, as well as two of the individuals in our dataset, as its inputs and returns true if and only if they share at least one ancestor.

Sample input and output:
hasCommonAncestor(parentChildPairs, 3, 8) => false
hasCommonAncestor(parentChildPairs, 5, 8) => true
hasCommonAncestor(parentChildPairs, 6, 8) => true
hasCommonAncestor(parentChildPairs, 1, 3) => false

*/

var parentChildPairs = [
    [1, 3], [2, 3], [3, 6], [5, 6],
    [5, 7], [4, 5], [4, 8], [8, 10]
];



const findNodesWithZeroAndOneParents = (parentChildPairs) => {
  
  const countMap = {};
  const allNodes = {};
  
  
  parentChildPairs.forEach( (pair) => {
    
    if(!countMap[pair[1]]) {
      countMap[pair[1]] = 1;
    } else {
      countMap[pair[1]] ++;
    }
    
    if( !allNodes[pair[0]] ) {
      allNodes[pair[0]] = pair[0];
    }
    if( !allNodes[pair[1]] ) {
      allNodes[pair[1]] = pair[1];
    }
            
  });
  
  const countMapKeys = Object.keys(countMap);
  const countMapValues = Object.values(countMap);
  
  const countAllNodes = Object.values(allNodes);

  const zeroParent = [];
  const oneParent = [];
  
  countAllNodes.forEach( (node) => {
    
    if( countMapKeys.indexOf(node.toString()) == -1) {
      zeroParent.push(node);
    }
    
    if(countMap[node] && (countMap[node] === 1) ) {
     oneParent.push(node);
    }
  })

  
  const retObj = {};
  retObj.zeroParent = zeroParent;
  retObj.oneParent = oneParent;
  
  return retObj;
  
}

console.log(findNodesWithZeroAndOneParents(parentChildPairs));

const hasCommonAncestor = (parentChildPairs, x, y ) => {
  
  
  const objAncestor = {};
  
  parentChildPairs.forEach( (pair) => {
    
    if( !objAncestor[pair[1]] ) {      
      
      objAncestor[pair[1]] = pair[0];      
      
    } else {
      
      const tempArr = objAncestor[pair[1]].split();
      tempArr.push(pair[0]);
      objAncestor[pair[1]] = tempArr.join();      
      
    }
  }
  
}