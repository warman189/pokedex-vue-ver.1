<template>
  <div class="filter" v-on-click-outside="() => (open = false)">
    <button class="sort-btn" type="button" @click="toggle">
      <IconSortCircle :active="open" />
    </button>

    <div v-if="open" class="menu">
      <button
        v-for="opt in options"
        :key="opt.value"
        class="menu-item"
        type="button"
        @click="select(opt.value)"
      >
        <IconFilterCheckbox class="check" :checked="current === opt.value" />
        <span>{{ opt.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import IconSortCircle from './icons/IconSortCircle.vue'
import IconFilterCheckbox from './icons/IconFilterCheckbox.vue'

const emit = defineEmits(['sort'])

type SortValue = 'id-asc' | 'id-desc' | 'name-asc' | 'name-desc'
const open = ref(false)
const current = ref<SortValue>('id-asc')
const options: { value: SortValue; label: string }[] = [
  { value: 'id-asc', label: 'ID (Asc)' },
  { value: 'id-desc', label: 'ID (Desc)' },
  { value: 'name-asc', label: 'Name (A-Z)' },
  { value: 'name-desc', label: 'Name (Z-A)' },
]

const toggle = () => {
  open.value = !open.value
}

const select = (value: SortValue) => {
  current.value = value
  emit('sort', value)
  open.value = false
}
</script>

<style scoped>
.filter {
  position: relative;
}
.sort-btn {
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}
.menu {
  position: absolute;
  right: 0;
  margin-top: 8px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.12),
    0 2px 6px rgba(0, 0, 0, 0.08);
  padding: 8px;
  min-width: 180px;
  z-index: 10;
}
.menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  background: transparent;
  border: none;
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
}
.menu-item:hover {
  background: #f5f5f5;
}
.check {
  width: 24px;
  height: 24px;
}
</style>
