const Stack = require('./stack')

test('push element to stack', () => {
    const stack = new Stack()
    stack.push("dog")
    stack.push("cat")
    stack.push("mouse")
    
    const dog = stack[0]
    expect(dog).toBe(dog);
})

test('pop element from stack', () => {
    const stack = new Stack()
    stack.push("dog")
    stack.push("cat")
    stack.push("mouse")

    const pop = stack.pop()
    expect(pop).toBe("mouse")
})

test('peek top of Stack', () => {
    const stack = new Stack()
    stack.push("dog")
    stack.push("cat")
    stack.push("mouse")

    const peek = stack.peek()
    expect(peek).toBe("mouse")
})




