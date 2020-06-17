const stop = (time) => {
  const hrend = process.hrtime(time)
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
}

const run = () => {
  return process.hrtime()
}

function getRandomBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function isSorted (array) {
  for ( let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  stop,
  run,
  getRandomBetween,
  isSorted
}
