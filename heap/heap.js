class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    add(data) {
        if(this.values.length === 0) this.values.push(data)
        else if(this.values.length > 0) {
            this.values.push(data)
            this.bubbleUp()
        }
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
}


module.exports = MaxBinaryHeap