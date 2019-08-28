const end = (start) => {
  const hrend = process.hrtime(start)
  console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
}

const start = () => {
  return process.hrtime()
}

module.exports = {
  end,
  start
}
