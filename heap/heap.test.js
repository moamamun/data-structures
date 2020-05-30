const Heap = require("./heap")

test("Inserts Max Heap correctly", () => {
    const heap = new Heap() 
    heap.add(2)
    heap.add(1)
    heap.add(3)
    heap.add(4)
    console.log(heap)
    expect(heap).toEqual({values: [ 4, 3, 2, 1 ]})
})