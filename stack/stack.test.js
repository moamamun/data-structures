const stack = require('./stack')

test('push element to stack', () => {
    const stack = new Stack()
    stack.push("dog")
    stack.push("cat")
    stack.push("mouse")

    expect(stack).toBe({ '1': 'dog', '2': 'cat', '3': 'mouse'});
})





