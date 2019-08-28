const {start, end} = require('./helpers')

// selection sort
const selectionSort = (arr) => {
  const _start = start()
  for (let i = 0, l = arr.length, k = l-1; i<k; i++) {
    let indexMin = i

    for (let j = i + 1; j < l; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j
      }
    }

    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
    }
  }

  end(_start)
  return arr
}

// insertion sort
const insertionSort = (arr) => {
  const _start = start()
  for (let i = 1, l = arr.length; i < l; i++) {
    const current = arr[i]
    let j = i

    while (j > 0 && arr[j-1] > current) {
      arr[j] = arr[j-1]
      j--
    }

    arr[j] = current
  }

  end(_start)
  return arr
}

// bubble sort
const bubbleSort = (arr) => {
  const _start = start()
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
    let wasSwap = false

    for (let j = 0, endJ = endI-i; j< endJ; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        wasSwap = true
      }
    }

    if (!wasSwap) {
      break
    }
  }

  end(_start)
  return arr
}

const arr = [2,0,4,1,6,3,5,7,9,8]

const selectionSortResult = selectionSort(arr.slice())
console.log('selectionSortResult', selectionSortResult.toString())

const insertionSortResult = insertionSort(arr.slice())
console.log('insertionSort', insertionSortResult.toString())

const bubbleSortResult = bubbleSort(arr.slice())
console.log('bubbleSort', bubbleSortResult.toString())
