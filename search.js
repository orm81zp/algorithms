const {start, end} = require('./helpers')

const linearSearch = (arr, item) => {
  const _start = start()
  let i = 0, l = arr.length

  while (i < l) {
    if (arr[i] === item) {
      end(_start)
      return {position: i}
    }
    i++
  }

  end(_start)
  return false
}

const arr = [2,0,4,1,6,3,5,7,9,8]
const target = parseInt(process.argv[2], 10) || 9
const linearSearchResult = linearSearch(arr, target)
console.log('linearSearchResult, target %d, result %s', target, linearSearchResult ? linearSearchResult.position : false)