const {bubbleSort} =  require('./sort')

const search = (arr, item) => {
  let i = 0, l = arr.length

  while (i < l) {
    if (arr[i] === item) {
      return i
    }
    i++
  }

  return false
}

const binarySearch = (arr, x) => {
  let low = 0, mid, high = arr.length-1

  while(low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (x < arr[mid])
      high = mid - 1
    else if (x > arr[mid])
      low = mid + 1
    else
      return mid
  }
  return -1
}

module.exports = {
  search,
  binarySearch,
}

// const arr = bubbleSort([2,0,4,1,6,3,5,7,9,8])
// const target = parseInt(process.argv[2], 10) || 9
// const searchResult = search(arr, target)
// console.log('linearSearchResult, target %d, result %s', target, searchResult ? searchResult.position : false)
//
// const binarySearchResult = binarySearch(arr, target)
// console.log('binarySearchResult, target %d, result %s', target, binarySearchResult === -1 ? false : binarySearchResult)