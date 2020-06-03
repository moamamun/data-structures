const SLL = require("./singlylinkedlist")

test("Inserts correctly", () => {
    const link = new SLL()
    link.insert(1)
    link.insert(2)
    link.insert(3)
    link.insert(4)
    
    expect(link).toEqual({"head": {"data": 1, "next": {"data": 2, "next": {"data": 3, "next": {"data": 4, "next": null}}}}})
})

test("Print nodes", () => {
    const link = new SLL()
    link.insert(1)
    link.insert(2)
    link.insert(3)
    link.insert(4)
    expect(link.traverse()).toEqual([1,2,3,4])
})

test("Print empty", () => {
    const link = new SLL()
    expect(link.traverse()).toEqual([])
})

test("Remove node", () => {
    const link = new SLL()
    link.insert(1)
    link.insert(2)
    link.insert(3)
    link.insert(4)
    link.remove(3)
    expect(link).toEqual({"head": {"data": 1, "next": {"data": 2, "next": {"data": 4, "next": null}}}})
})

test("remove head", () => {
    const link = new SLL()
    link.insert(1)
    link.insert(2)
    link.insert(3)
    link.insert(4)
    link.remove(1)
    
    expect(link).toEqual({"head": {"data": 2, "next": {"data": 3, "next": {"data": 4, "next": null}}}})
})

