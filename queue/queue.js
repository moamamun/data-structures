class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }
}

const queue = new Queue() 
queue.enqueue("hi lol")
queue.enqueue("hey lol")

console.log(queue)