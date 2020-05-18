const BST = require('./bts')

test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function')
});

test('BTS can insert and check correctly', () => {
  const tree = new BST()
  tree.add(5)
  tree.add(2)
  tree.add(15)
  tree.add(17)

  expect(tree.root.data).toEqual(5)
  expect(tree.root.left.data).toEqual(2)
  expect(tree.root.right.data).toEqual(15)
  expect(tree.root.right.right.data).toEqual(17)
});

test('Contains data, returns node', () => {
  const tree = new BST()
  tree.add(5)
  tree.add(2)
  tree.add(15)
  tree.add(17);

  const five = tree.root
  const two = tree.root.left
  
  expect(tree.contains(5)).toEqual(five);
  expect(tree.contains(2)).toEqual(two);
  expect(tree.contains(12)).toEqual(null);
});

test('Does not contain data return null', () => {
  const tree = new BST()
  tree.add(5)
  tree.add(2)
  
  expect(tree.contains(99)).toEqual(null);
});


test('Remove existing Node and data'), () => {
  const tree = new BST()
  tree.add(5)
  tree.add(2)
  tree.add(15)
  tree.add(17);

  const remove =  tree.remove(17)
  expect(remove).toEqual(!tree.contains(17))
}