// iOS Safari does not support navigator.vibrate. This helper safely no-ops there.
export function vibrate(duration = 15) {
  try {
    if (typeof navigator === 'undefined') return
    const ua = (navigator.userAgent || '').toLowerCase()
    const isiOS = /iphone|ipad|ipod/.test(ua)
    if (isiOS) return // no-op on iOS Safari
    const anyNav = navigator as Navigator & { vibrate?: (pattern: number | number[]) => boolean }
    anyNav.vibrate?.(duration)
  } catch {
    // noop
  }
}
