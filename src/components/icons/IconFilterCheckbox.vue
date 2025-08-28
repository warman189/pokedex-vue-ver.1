<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="4"
      :fill="checked ? '#D32F2F' : 'none'"
      :stroke="checked ? '#D32F2F' : '#333'"
      stroke-width="2"
    />
    <path
      v-if="checked"
      d="M7 12.5L10.5 16L17 9"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  checked?: boolean
}>()
</script>
