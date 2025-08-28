// iOS-safe scroll lock: fixes background scroll when a modal is open
// Saves current scroll position, fixes body, and restores on unlock.

let locked = false
let scrollY = 0

export function lockScroll() {
  if (locked) return
  if (typeof window === 'undefined') return
  scrollY = window.scrollY || document.documentElement.scrollTop
  const body = document.body
  body.style.position = 'fixed'
  body.style.top = `-${scrollY}px`
  body.style.left = '0'
  body.style.right = '0'
  body.style.width = '100%'
  body.style.overflow = 'hidden' // just in case
  body.style.touchAction = 'none' // reduce scroll chaining on some browsers
  locked = true
}

export function unlockScroll() {
  if (!locked) return
  if (typeof window === 'undefined') return
  const body = document.body
  // Clear styles
  body.style.position = ''
  body.style.top = ''
  body.style.left = ''
  body.style.right = ''
  body.style.width = ''
  body.style.overflow = ''
  body.style.touchAction = ''
  // Restore scroll
  window.scrollTo({ top: scrollY, behavior: 'instant' as ScrollBehavior })
  locked = false
}
