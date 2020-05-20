class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
  }
}

class BST {
  constructor() {
    this.root = null
  }
  add(data) {
    const node = this.root
    if (node === null) {
      this.root = new Node(data)
      return
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data)
            return
          } else if (node.left !== null) {
            return searchTree(node.left)
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data)
            return
          } else if (node.right !== null) {
            return searchTree(node.right)
          }
        } else {
          return null
        }
      }
      return searchTree(node)
    }
  }

  find(data) {
    if (data === this.root) {
      return this.root
    }
    let current = this.root
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
      if (current === null) {
        return null
      }
    }
    return current
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) return null
      if (node.data === data) {
        // node has no children
        if (node.left === null && node.right === null) return null
        // node has no right child
        if (node.right === null) return node.left
        // node has no left child
        if (node.left === null) return node.right
        // node has two children
        let tempNode = node.right
        while (tempNode.left !== null) {
          tempNode = tempNode.left
        }
        // assign node with replacement
        node.data = tempNode.data
        // remove the node used for replacement
        node.right = removeNode(node.right, tempNode)
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        node.left = removeNode(node.left, data)
        return node
      }
    }
    this.root = removeNode(this.root, data)
  }
}

module.exports = Node
module.exports = BST