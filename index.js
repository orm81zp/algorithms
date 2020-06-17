// const array = Array(100)
//   .fill(null)
//   .map(() => Math.floor(Math.random() * 2000) - 1000);

const array = [
  -812,  225, -557,  867,  427, -957,  171,  794,  120, -343, -499,
  -631, -878,  740,  369, -517, -351,  -60, -645,   19, -334,  996,
  656, -126,  684,  708, -358, -699,  981, -481,  353, -390, -208,
  265,   81,  635, -218, -244,  -97, -153,  856,  875, -189,  523,
  -928,  427, -941,   23, -210, -188,  -43,  529,  775, -921,  299,
  348,  563,   28,  322,  183,   17,  660, -726,  693,  615, -784,
  -456,  365,  233,  268,  -34, -586,  655, -669,  -82,  453,  541,
  460,  249, -952,  842, -611, -139,  404,  295, -224,   11,  470,
  589,  281,  -11, -745, -697,  409, -630,  207, -889,  391, -153,
  -663
];

function bubbleSort(array) {
  const arr = [...array];
  const _length = arr.length;

  for ( let n = 0; n < _length; n++) {
    for (let i = 0; i < _length - 1 - n; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }

  return arr;
}

function quicksort(array) {
  if (array.length < 2) {
    return array;
  }

  const arr = [...array];
  const index = Math.floor(Math.random() * arr.length);
  const currentItem = array[index];

  const more = [];
  const less = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      continue;
    }

    if (arr[i] > currentItem) {
      more.push(arr[i]);
    } else {
      less.push(arr[i]);
    }
  }

  return [
    ...quicksort(less),
    currentItem,
    ...quicksort(more)
  ];
}

function selectionSort(array) {
  const arr = [...array];

  for (let j = 0; j < arr.length - 1; j++) {
    let max = -Infinity;
    let index = null;

    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > max) {
        max = arr[i];
        index = i;
      }
    }

    let buff = arr[arr.length - 1 - j];
    arr[arr.length - 1 - j] = max;
    arr[index] = buff;
  }

  return arr;
}

function binarySearch(arr, x) {
  let low = 0, mid, top = arr.length - 1;

  while (low <= top) {
    let mid = Math.floor( (low + top) / 2);

    if (x < arr[mid]) {
      top = mid - 1
    } else if (x > arr[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}
