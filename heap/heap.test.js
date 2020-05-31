const MaxBinaryHeap = require("./maxbinaryheap")
const MinBinaryHeap = require("./minbinaryheap")

test("Add Max Heap correctly", () => {
    const heap = new MaxBinaryHeap() 
    heap.add(2)
    heap.add(1)
    heap.add(3)
    heap.add(4)
    expect(heap).toEqual({values: [ 4, 3, 2, 1 ]})
})

test("Return largest element (root)", () => {
    const heap = new MaxBinaryHeap() 
    heap.add(2)
    heap.add(1)
    heap.add(3)
    heap.add(4)
    const max = heap.getMax()
    expect(max).toEqual(4)
})

test("Removes maximum element from MaxHeap", () => {
    const heap = new MaxBinaryHeap() 
    heap.add(2)
    heap.add(1)
    heap.add(3)
    heap.add(4)
    const max = heap.extractMax()
    expect(max).toEqual(4)
})

//touch uncovered line 42-44
test("Removes maximum element from MaxHeap", () => {
    const heap = new MaxBinaryHeap() 
    heap.add(4)
    heap.add(1)
    heap.add(3)
    heap.add(2)
    const max = heap.extractMax()
    expect(max).toEqual(4)
})

/*
 Min Binary Heap Test
*/

test("Add Min Heap correctly", () => {
    const heap = new MinBinaryHeap() 
    heap.add(2)
    heap.add(1)
    heap.add(3)
    heap.add(4)
    expect(heap).toEqual({ values: [ 1, 2, 3, 4 ] })
})

test("Return smallest element (root)", () => {
    const heap = new MinBinaryHeap() 
    heap.add(2)
    heap.add(1)
    heap.add(3)
    heap.add(4)
    expect(heap.getMin()).toEqual(1)
})

test("Removes minimum element from MinHeap", () => {
    const heap = new MinBinaryHeap() 
    heap.add(2)
    heap.add(1)
    heap.add(3)
    heap.add(4)
    const min = heap.extractMin()
    expect(min).toEqual(1)
})

// touch uncovered line 46-48
test("Removes minimum element from MinHeap", () => {
    const heap = new MinBinaryHeap() 
    heap.add(3)
    heap.add(1)
    heap.add(2)
    heap.add(4)
    const min = heap.extractMin()
    expect(min).toEqual(1)
})