class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) this.root = newNode;
    else {
      let currentNode = this.root;
      while (true) {
        if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        } else if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else return;
      }
    }
  }
  //Search
  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) return false;
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (!currentNode.right) {
          if (!parentNode) this.root = null;
          else {
            //If parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value)
              parentNode.left = currentNode.left;
            //If parent < current value, make current right child a child of parent
            else if (currentNode.value > parentNode.value)
              parentNode.right = currentNode.left;
          }
          //Option 2: Right child which doesnt have a left child
        } else if (!currentNode.right.left) {
          if (!parentNode) this.root = null;
          else {
            currentNode.right.left = currentNode.left;
            //If parent > current value, make current left child a child of parent
            if (currentNode.right.value < parentNode.value) {
              parentNode.left = currentNode.right;
            }
            //If parent < current value, make current right child a child of parent
            else if (currentNode.right.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
          //Option 3: Right child that have a left child
        } else {
          //find the Right child 's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost 's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (!parentNode) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }
}
const traverse = (node) => {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
};
//      9
//  4      20
//1   6  15  170

console.log("Start");
const tree = new BinarySearchTree();
tree.insert(7);
tree.insert(42);
tree.insert(56);
tree.insert(47);
tree.insert(51);
tree.insert(71);
tree.insert(58);
tree.insert(95);
tree.insert(83);
tree.insert(99);
tree.insert(96);
// JSON.stringify(traverse(tree.root));
tree.remove(56);
tree.remove(71);
console.log(tree);
console.log("End");

7, 42, 56, 47, 51, 71, 58, 95, 83, 99, 96;
