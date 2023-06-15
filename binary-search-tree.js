// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    let newNode = new TreeNode(val);
    if(!this.root){
      this.root = newNode;
      return;
    }
    if(val < currentNode.val){
      if(!currentNode.left){
        currentNode.left = newNode;
      } else {
        this.insert(val, currentNode.left)
      }
    } else {
      if(!currentNode.right){
        currentNode.right = newNode;

      } else {
        this.insert(val, currentNode.right)
      }
    }
// space = o(n); n for height
// insert = o(logn)

  }

  search(val) {
    // time = o(log n);
    let currentNode = this.root;
    while (currentNode){
      if(val > currentNode.val ){
        currentNode = currentNode.right;
      } else if(val < currentNode.val){
        currentNode = currentNode.left;
      } else {
        return true;
      }
    }
    return false;
  }


  preOrderTraversal(currentNode = this.root) {
    // root, left, right
    if (currentNode ){
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
}


  inOrderTraversal(currentNode = this.root) {
    // left; root, right
    if(currentNode){
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }
  }


  postOrderTraversal(currentNode = this.root) {
    // left, right, root
    if(currentNode) {
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val)
    }
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const queue = [this.root];

    while(queue.length > 0){
      let currentNode = queue.shift();
      console.log(currentNode.val);
      if(currentNode.left){
        queue.push(currentNode.left);
      }
      if(currentNode.right){
        queue.push(currentNode.right)
      }

    }

  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const stack = [this.root];

    while(stack.length){
      const currentNode = stack.pop();
      console.log(currentNode.val);
      if(currentNode.left){
        stack.push(currentNode.left);
      }
      if(currentNode.right){
        stack.push(currentNode.right)
      }
    }
  }
}



module.exports = { BinarySearchTree, TreeNode };
