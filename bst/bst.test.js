const BST = require("./bst")

test("Node is a constructor", () => {
  expect(typeof Node.prototype.constructor).toEqual("function")
})

test("BTS can insert correctly", () => {
  const tree = new BST()
  tree.add(10)
  tree.add(20)
  tree.add(15)
  tree.add(15)
  tree.add(7)
  tree.add(4) 
  tree.add(0)
  tree.add(17)

  // expect(tree.root.data).toEqual(5)
  // expect(tree.root.left.data).toEqual(0)
  // expect(tree.root.right.data).toEqual(15)
  // expect(tree.root.right.right.data).toEqual(17)
})

test("BTS should return null for already existed nodes", () => {
  const tree = new BST()
  tree.add(5)
  tree.add(2)
  tree.add(15)
  tree.add(17)
  expect(tree.add(17)).toEqual(null)
})

test("BTS contains data and returns node", () => {
  const tree = new BST()
  tree.add(5)
  tree.add(2)
  tree.add(15)
  tree.add(17)

  const five = tree.root
  const two = tree.root.left
  const twelve = tree.root.right
  //return root
  expect(tree.find(5)).toEqual(five)
  //
  expect(tree.find(2)).toEqual(two)
  expect(tree.find(15)).toEqual(twelve)
  expect(tree.find(12)).toEqual(null)
  expect(tree.find(12)).toEqual(null)
})

test("Does not contain data return null", () => {
  const tree = new BST()
  tree.add(5)
  tree.add(2)

  expect(tree.find(99)).toEqual(null)
})

test("Remove existing Node and data", () => {
  const tree = new BST()
  tree.add(5)
  tree.add(0)
  tree.add(3)
  tree.add(15)
  tree.add(10)
  tree.add(17)
  tree.add(7)
  tree.add(20)

  tree.remove(5)
  tree.remove(20)
  tree.remove(0)
  tree.remove(10)

  expect(tree.root.data).toEqual(7)
  expect(tree.root.right.right.right).toEqual(null)
  expect(tree.root.left.data).toEqual(3)
  expect(tree.root.right.left.data).toEqual(7)

})

test("Find smallest data in tree", () => {
  const tree = new BST()
  tree.add(5)
  tree.add(0)
  tree.add(3)
  tree.add(15)
  tree.add(10)
  tree.add(17)

  const smallest = tree.findMin()
  expect(smallest).toEqual(0)
})

test("Find biggest data in tree", () => {
  const tree = new BST()
  tree.add(5)
  tree.add(0)
  tree.add(3)
  tree.add(15)
  tree.add(10)
  tree.add(17)

  const biggest = tree.findMax()
  expect(biggest).toEqual(17)
})

test("BTS return greatest hieght", () => {
  const tree = new BST()
  tree.add(5)
  tree.add(0)
  tree.add(3)
  tree.add(15)
  tree.add(10)
  tree.add(17)
  const max = tree.maxHeight()
  expect(max).toEqual(2)
})

test("BTS return minimum hieght", () => {
  const tree = new BST()
  tree.add(5)
  tree.add(0)
  tree.add(3)
  tree.add(15)
  tree.add(10)
  tree.add(17)
  const min = tree.minHeight()
  expect(min).toEqual(1)
})

test("BTS balanced", () => {
  const tree = new BST()
  tree.add(5)
  tree.add(0)
  tree.add(3)
  tree.add(15)
  tree.add(10)
  tree.add(17)
  const isBalanced = tree.isBalanced()
  expect(isBalanced).toEqual(true)
})

test(("BTS Inorder Traversal"), () => {
  const tree = new BST()
  tree.add(5)
  tree.add(0)
  tree.add(3)
  tree.add(15)
  tree.add(10)
  tree.add(17)
  const Inorder = tree.Inorder()
  expect(Inorder).toEqual([0,3,5,10,15,17])
})

test(("BTS Preorder Traversal"), () => {
  const tree = new BST()
  tree.add(5)
  tree.add(0)
  tree.add(3)
  tree.add(15)
  tree.add(10)
  tree.add(17)
  const Preorder = tree.Preorder()
  expect(Preorder).toEqual([5,0,3,15,10,17])
})

test(("BTS Postorder Traversal"), () => {
  const tree = new BST()
  tree.add(5)
  tree.add(0)
  tree.add(3)
  tree.add(15)
  tree.add(10)
  tree.add(17)
  const Postorder = tree. Postorder()
  expect(Postorder).toEqual([3,0,10,17,15,5])
})
