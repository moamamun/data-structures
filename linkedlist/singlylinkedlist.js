class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SLinkedList {
    constructor() {
        this.head = null
    }
    insert(data) {
        if(this.head === null) {
            this.head = new Node(data)
        } else {
            let node = this.head
            while(node.next !== null) {
                node = node.next
            }
            node.next = new Node(data)
        }
    }
    traverse() {
        let node = this.head
        while(node) {
            console.log(node.data)
            node = node.next
        }
    }
    remove(data) {
        if(data === this.head.data) {
            this.head = this.head.next
        } else {
            let node = this.head.next
            let prev = this.head
            while(node.data !== data) {
                prev = node
                node = node.next
            }
            prev.next = node.next
        }
        return undefined
    }
}

const link = new SLinkedList()
link.insert(1)
link.insert(2)
link.insert(3)
link.insert(4)

link.remove(3)
link.traverse()

console.log(link)