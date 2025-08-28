export function vibrate(duration = 15) {
  try {
    if (typeof navigator !== 'undefined') {
      const anyNav = navigator as Navigator & { vibrate?: (pattern: number | number[]) => boolean }
      anyNav.vibrate?.(duration)
    }
  } catch {
    // noop
  }
}
