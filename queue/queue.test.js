const Queue = require('./queue')

test('add elements to queue', () => {
    const queue = new Queue() 
    queue.enqueue("dog")
    queue.enqueue("cat")
    
    expect(queue).toEqual({ storage: { '0': 'dog', '1': 'cat' }, head: 0, tail: 2 })
})

test('next in queue', () =>{
    const queue = new Queue() 
    queue.enqueue("dog")
    queue.enqueue("cat")

    const removed = queue.dequeue()
    expect(removed).toBe("dog")
})