const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST(rootNode, arr = []) {
  if (rootNode) {
    findMinBST(rootNode.left, arr);
    arr.push(rootNode.val);
    findMinBST(rootNode.right, arr);
    if (arr.length) {
      return arr[0];
    }
  }
}

function findMaxBST(rootNode, arr = []) {
  if (rootNode) {
    findMaxBST(rootNode.left, arr);
    arr.push(rootNode.val);
    findMaxBST(rootNode.right, arr);
    if (arr.length) {
      return arr[arr.length - 1];
    }
  }
}

function findMinBT(rootNode) {
  const stack = [rootNode];
  let min = Infinity;
  while (stack.length) {
    const currentNode = stack.pop();
    if (currentNode.val < min) {
      min = currentNode.val;
    }
    if (currentNode.left) {
      stack.push(currentNode.left)
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
    }

  }
  return min;
}


function findMaxBT(rootNode) {
  const stack = [rootNode];
  let max = -Infinity;
  while (stack.length) {
    const currentNode = stack.pop();
    if (currentNode.val > max) {
      max = currentNode.val;
    }
    if (currentNode.left) {
      stack.push(currentNode.left)
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
    }

  }
  return max;
}

function getHeight(rootNode) {
  /*//!this was code attempted
   let height;
   if (!rootNode) {
     height = -1;
     // height--;
   } else if (rootNode.right === null && rootNode.left === null) {
     height = 0;
 
   } else {
 
   }
   return height;
   */

  // /*
  let height;
  if (!rootNode) {
    return -1;
  }
  if (!rootNode.left && !rootNode.right) {
    return 0;
  }
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);
  return Math.max(leftHeight, rightHeight) + 1;
  //*/
}

function recurseHelper(direction, rootNode) {
  let sideLength = 0;
  if (direction === "left") {
    if (rootNode.left) {
      sideLength++;
      recurseHelper("left", rootNode.left);
    }
    console.log("I am going to return sidelength now for LEFT");
    return sideLength;
  }
  else if (direction === "right") {
    if (rootNode.right) {
      //console.log("hello, I am RIGHT here?")
      sideLength++;
      recurseHelper("right", rootNode.right);
    }
    console.log("I am going to return sidelength now for RIGHT");
    return sideLength;
  }
}

function balancedTree(rootNode) {
  // Your code here
  let balancedBool = false;
  if (!rootNode) {
    return;
  }
  let leftSide = 0;
  let rightSide = 0;
  //straight to the left incrementing as we go
  if (rootNode.left) {
    leftSide = recurseHelper("left", rootNode.left);
  }
  //if left 

  //stright ot the right, incrememtning as we go
  if (rootNode.right) {
    rightSide = recurseHelper("right", rootNode.right);
  }
  console.log("rightSide: ", rightSide);
  console.log("leftSide: ", leftSide);
  const lengthDiff = leftSide - rightSide;
  console.log("lengthDiff: ", lengthDiff);
  const absLengthDiff = Math.abs(lengthDiff);
  if (absLengthDiff <= 1) {
    balancedBool = true;
  }

  return balancedBool;
}

function countNodes(rootNode) {
  const stack = [rootNode];
  let count = 0;
  while (stack.length) {
    const currentNode = stack.pop();
    count++;
    if (currentNode.left) {
      stack.push(currentNode.left)
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
  }
  return count;
}

function getParentNode(rootNode, target) {
  // Your code here
}

function inOrderPredecessor(rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
