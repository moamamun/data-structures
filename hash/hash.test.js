const hash = require("./hash")

test("Hash function returns index consistently", () => {
  let ht = new hash()
  const hashing = ht.hash("maroon")

  expect(hashing).toEqual(0)
  expect(hashing).toEqual(0)
  expect(hashing).toEqual(0)
})

test("Set works correctly (Seartate chaining)", () => {
  let ht = new hash()
  ht.set("maroon", "#800000")
  ht.set("yellow", "#FFFF00")
  ht.set("olive", "#808000")
  ht.set("salmon", "#FA8072")
  ht.set("lightcoral", "#F08080")
  ht.set("mediumvioletred", "#C71585")
  ht.set("plum", "#DDA0DD")
  expect(ht).toEqual({
    keyMap: [
      [
        ["maroon", "#800000"],
        ["yellow", "#FFFF00"],
        ["plum", "#DDA0DD"],
      ],
      [["mediumvioletred", "#C71585"]],
      [["salmon", "#FA8072"]],
      [
        ["olive", "#808000"],
        ["lightcoral", "#F08080"],
      ],
    ],
  })
})

test("Get works correctly", () => {
  let ht = new hash()
  ht.set("maroon", "#800000")
  ht.set("yellow", "#FFFF00")
  const getMaroonKey = ht.get("maroon")
  const getYellowKey = ht.get("yellow")

  expect(getMaroonKey).toEqual("#800000")
  expect(getYellowKey).toEqual("#FFFF00")
})

test("Get return undefined", () => {
  let ht = new hash()
  ht.set("maroon", "#800000")
  ht.set("yellow", "#FFFF00")
  const getMaroonKey = ht.get("maroon")
  const getYellowKey = ht.get("yellow")
  const getBlueKey = ht.get("blue")

  expect(getMaroonKey).toEqual("#800000")
  expect(getYellowKey).toEqual("#FFFF00")
})

test("Return all keys in an array", () => {
  let ht = new hash()
  ht.set("maroon", "#800000")
  ht.set("yellow", "#FFFF00")
  ht.set("olive", "#808000")
  ht.set("salmon", "#FA8072")
  ht.set("lightcoral", "#F08080")
  ht.set("mediumvioletred", "#C71585")
  ht.set("plum", "#DDA0DD")
  const getKeys = ht.keys()
  expect(getKeys).toEqual([
    "maroon",
    "yellow",
    "plum",
    "mediumvioletred",
    "salmon",
    "olive",
    "lightcoral",
  ])
})

test("Return all values in an array", () => {
  let ht = new hash()
  ht.set("maroon", "#800000")
  ht.set("yellow", "#FFFF00")
  ht.set("olive", "#808000")
  ht.set("salmon", "#FA8072")
  ht.set("lightcoral", "#F08080")
  ht.set("mediumvioletred", "#C71585")
  ht.set("plum", "#DDA0DD")
  const getValues = ht.values()
  expect(getValues).toEqual([
    "#800000",
    "#FFFF00",
    "#DDA0DD",
    "#C71585",
    "#FA8072",
    "#808000",
    "#F08080",
  ])
})

/*
touch uncovered lines 38-51
*/

//empty, index doesn't exist
test("Return all keys in an array", () => {
  let ht = new hash()

  const getKeys = ht.keys()
  expect(getKeys).toEqual([])
})

//duplicates handling..
test("Return all values in an array", () => {
  let ht = new hash()
  ht.set("lightcoral", "#F08080")
  ht.set("mediumvioletred", "#C71585")
  ht.set("plum", "#DDA0DD")
  ht.set("lightcoral", "#F08080")
  ht.set("mediumvioletred", "#C71585")
  ht.set("plum", "#DDA0DD")
  const getValues = ht.values()
  expect(getValues).toEqual(["#DDA0DD", "#C71585", "#F08080"])
})
