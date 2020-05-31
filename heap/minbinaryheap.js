class MinBinaryHeap {
    constructor () {
        this.values = []
    }
    add(data) {
        this.values.push(data)
        this.bubbleUp()
    }
    bubbleUp() {
        let index = this.values.length - 1
        let element = this.values[index]

        while(index > 0) {
            let parentIndex = Math.floor((index - 1)/2)
            let parent = this.values[parentIndex]

            if(element >= parent) break
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
        }
    }
    getMin() {
        return this.values[0]
    }
    extractMin() {
        let min = this.values[0]
        let last = this.values.pop()
        this.values[0] = last
        this.bubbleDown()
        return min
    }
    bubbleDown() {
        let index = 0
        let element = this.values[index]

        while(index < this.values.length - 1) {
            let leftChildIndex = (2 * index) + 1
            let rightChildIndex = (2 * index) + 2
            let leftChild = this.values[leftChildIndex]
            let rigthChild = this.values[rightChildIndex]
            if(leftChild === undefined && rigthChild === undefined || element <= leftChild && element <= rigthChild) {
                break
            }
            if(leftChild > rigthChild) {
                this.values[index] = rigthChild
                this.values[rightChildIndex] = element
                index = rightChildIndex
            } else {
                this.values[index] = leftChild
                this.values[leftChildIndex] = element
                index = leftChildIndex
            }
        }
    }
}

const heap = new MinBinaryHeap() 
heap.add(2)
heap.add(1)
heap.add(3)
heap.add(4)
console.log(heap)
heap.extractMin()
console.log(heap)

module.exports = MinBinaryHeap