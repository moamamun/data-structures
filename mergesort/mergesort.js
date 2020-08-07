const mergeSort = (arr) => {
  if (arr.length <= 1) return arr
  let middle = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, middle))
  let right = mergeSort(arr.slice(middle))
  return merge(left, right)
}

const merge = (left, right) => {
  let arr = []

  let leftPointer = 0
  let rightPointer = 0

  while (leftPointer < left.length && rightPointer < right.length) {
    let leftElement = left[leftPointer]
    let rightElement = right[rightPointer]

    if (leftElement < rightElement) {
      arr.push(leftElement)
      leftPointer++
    } else {
      arr.push(rightElement)
      rightPointer++
    }
  }

  if (leftPointer !== left.length) {
    let temp = left.slice(leftPointer)
    arr = [...arr, ...temp]
  } else {
    let temp = right.slice(rightPointer)
    arr = [...arr, ...temp]
  }

  return arr
}
