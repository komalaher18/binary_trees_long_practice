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
    findMinBST(rootNode.left, arr);
    arr.push(rootNode.val);
    findMinBST(rootNode.right, arr);
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
  let height;
  if (!rootNode) {
    height = -1;
    // height--;
  } else if (rootNode.right === null && rootNode.left === null) {
    height = 0;

  } else {

  }
  return height;
  /*
  let height;
  if(!rootNode){
    return -1;
  }
  if(!rootNode.left && ! rootNode.right){
    return 0;
  }
  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);
  return Math.max(leftHeight, rightHeight) + 1;
  */
}

function balancedTree(rootNode) {
  // Your code here
}

function countNodes(rootNode) {
  // Your code here
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
