const BST = require("./bts")

test("Node is a constructor", () => {
  expect(typeof Node.prototype.constructor).toEqual("function")
})

test("BTS can insert correctly", () => {
  const tree = new BST()
  tree.add(5)
  tree.add(2)
  tree.add(15)
  tree.add(17)

  expect(tree.root.data).toEqual(5)
  expect(tree.root.left.data).toEqual(2)
  expect(tree.root.right.data).toEqual(15)
  expect(tree.root.right.right.data).toEqual(17)
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

  tree.remove(15)
  tree.remove(5)
  expect(tree.root.right.data).toEqual(17)
  expect(tree.root.data).toEqual(10)
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
