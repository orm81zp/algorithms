// selection sort
const selectionSort = (arr) => {
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

  return arr
}

// insertion sort
const insertionSort = (arr) => {
  for (let i = 1, l = arr.length; i < l; i++) {
    const current = arr[i]
    let j = i

    while (j > 0 && arr[j-1] > current) {
      arr[j] = arr[j-1]
      j--
    }

    arr[j] = current
  }

  return arr
}

// bubble sort
const bubbleSort = (arr) => {
  const l = arr.length
  for (let i = l; i > 0; i--) {
    let useSwap = false;

    for (let j = 0; j<l-1; j++) {
      if (arr[j] > arr[j + 1]) {
        useSwap = true;
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }

    if (!useSwap) {
      break;
    }
  }

  return arr
}

const qSort = (arr) => {
  if (arr.length < 2) {
    return arr
  }

  const pivot = arr[Math.floor(arr.length/2)]
  const less = arr.filter(value => value < pivot)
  const equals = arr.filter(value => value === pivot)
  const greater = arr.filter(value => value > pivot)

  return [
    ...qSort(less), ...equals, ...qSort(greater)
  ]
}

const arr = [2,40,4,5,123,6,31,5,17,1,8,9]

const selectionSortResult = selectionSort(arr.slice())
console.log('selectionSortResult', selectionSortResult.toString())

const insertionSortResult = insertionSort(arr.slice())
console.log('insertionSort', insertionSortResult.toString())

const bubbleSortResult = bubbleSort(arr.slice())
console.log('bubbleSort', bubbleSortResult.toString())

const qSortResult = qSort(arr.slice())
console.log('qSort', qSortResult.toString())
