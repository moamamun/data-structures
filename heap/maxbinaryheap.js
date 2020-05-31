class MaxBinaryHeap {
    constructor() {
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
            if(element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
    getMax() {
        return this.values[0]
    }
    extractMax() {
        let max = this.values[0]
        let last = this.values.pop()
        this.values[0] = last
        this.bubbleDown()
        return max
    }
    bubbleDown() {
        let index = 0
        let element = this.values[index]

        while(index < this.values.length - 1) {
            let leftChildIndex = 2 * index + 1
            let rightChildIndex = 2 * index + 2
            let leftChild = this.values[leftChildIndex]
            let rigthChild = this.values[rightChildIndex]
            if(leftChild === undefined && rigthChild === undefined || leftChild <= element && rigthChild <= element) break
            if(rigthChild > leftChild) {
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

module.exports = MaxBinaryHeap