<template>
  <div class="scroll-buttons" :class="{ visible: isVisible }">
    <!-- Primary button (used on mobile; on desktop it acts as Scroll Up) -->
    <button
      class="btn"
      :aria-label="shouldScrollUp ? 'Scroll to top' : 'Scroll to bottom'"
      :title="shouldScrollUp ? 'Up' : 'Down'"
      @click="shouldScrollUp ? scrollToTop() : scrollToBottom()"
    >
      <component :is="shouldScrollUp ? IconArrowUp : IconArrowDown" />
    </button>

    <!-- Secondary button (hidden on mobile via CSS) for desktop quick access to bottom) -->
    <button class="btn" aria-label="Scroll to bottom" title="Down" @click="scrollToBottom">
      <IconArrowDown />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import IconArrowUp from './icons/IconArrowUp.vue'
import IconArrowDown from './icons/IconArrowDown.vue'
import { vibrate } from '../utils/haptics'

const isVisible = ref(false)
const shouldScrollUp = ref(true)

const onScroll = () => {
  const y = window.scrollY || document.documentElement.scrollTop
  const max = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const nearTop = y < 200
  isVisible.value = y > 300 || max - y > 300
  // On mobile we show one button: at top -> show Down, otherwise show Up
  shouldScrollUp.value = !nearTop
}

const scrollToTop = () => {
  vibrate(12)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToBottom = () => {
  vibrate(12)
  const max = document.documentElement.scrollHeight
  window.scrollTo({ top: max, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.scroll-buttons {
  position: fixed;
  right: 16px;
  bottom: calc(16px + env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 50;
}
.scroll-buttons.visible {
  opacity: 1;
  pointer-events: auto;
}
.btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: var(--card-bg, rgba(255, 255, 255, 0.9));
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.btn:active {
  transform: translateY(1px);
}

/* Mobile: show only one main button that toggles between up/down based on position */
@media (max-width: 480px) {
  .scroll-buttons {
    gap: 0;
  }
  .btn + .btn {
    display: none;
  }
}
</style>
