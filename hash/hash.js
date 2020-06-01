//Goal to get a deeper understanding of Hash function

class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size)
  }
  hash(key) {
    let total = 0
    let prime = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * prime + value) % this.keyMap.length
    }
    return total
  }
  set(key, value) {
    let index = this.hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }
  get(key) {
    let index = this.hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }
  keys() {
    let arr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          arr.push(this.keyMap[i][j][0])
        }
      }
    }
    return arr
  }
  values() {
    let arr = []
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!arr.includes(this.keyMap[i][j][1])) {
            arr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return arr
  }
}

module.exports = HashTable
