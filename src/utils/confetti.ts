import confetti from 'canvas-confetti'

export const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ec4899', '#f97316', '#8b5cf6', '#06b6d4', '#fbbf24'],
  })
}

export const triggerConfettiExplosion = () => {
  const duration = 3 * 1000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 50 * (timeLeft / duration)
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
      colors: ['#ec4899', '#f97316', '#8b5cf6', '#06b6d4', '#fbbf24', '#34d399'],
    })
  }, 250)
}

export const triggerFireworks = () => {
  const defaults = { origin: { y: 0.5 }, zIndex: 9999 }

  function fire(particleRatio: number, opts: any) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(200 * particleRatio),
      colors: ['#ec4899', '#f97316', '#8b5cf6', '#06b6d4', '#fbbf24', '#34d399'],
    })
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  })
  fire(0.2, {
    spread: 60,
  })
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  })
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  })
}
