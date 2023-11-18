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
        currentNode = currentNode.right;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value === currentNode.value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (!currentNode.right) {
          if (!parentNode) this.root = currentNode.left;
          else {
            //If parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value)
              parentNode.left = currentNode.left;
            else if (currentNode.value > parentNode.value)
              parentNode.right = currentNode.left;
          }
          //Option 2: Right child which doesnt have a left child
        } else if (!currentNode.right.left) {
        } else {
        }
        let temp = currentNode;
        let parentTemp = null;
        let check = false;
        let isRightMost = false;
        if (!currentNode.right && !currentNode.left) parentNode.right = null;
        while (!check) {
          if (temp.right) {
            parentTemp = temp;
            temp = temp.right;
          } else if (!temp.right && !temp.left) {
            parentTemp.right = null;
            check = true;
          } else if (!temp.right && temp.left) {
            parentTemp = temp;
            temp = temp.left;
            isRightMost = true;
          }
          if (!temp.left && isRightMost) {
            check = true;
          }
        }
        temp.left = currentNode.left;
        parentTemp.left = temp.right;
        parentTemp.right = null;
        temp.right = parentTemp;
        // temp.right =
        parentNode.right = temp;
        let test = "";
        return this;
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
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(9);
tree.lookup(9);
// JSON.stringify(traverse(tree.root));
// tree.remove(65);
console.log(tree);
console.log("End");
