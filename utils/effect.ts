export function numberEffect(num: number, duration: number, callback: (currentNum: number) => void) {
  const start = 0
  const stepTime = duration / num

  let currentNum = start
  const startTime = performance.now()

  function animate(currentTime: number) {
    const elapsedTime = currentTime - startTime

    const targetNum = Math.min(start + Math.floor(elapsedTime / stepTime), num)

    if (currentNum !== targetNum) {
      currentNum = targetNum
      callback(currentNum)
    }

    if (currentNum < num) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}
