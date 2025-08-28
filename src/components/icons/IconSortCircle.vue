<template>
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="24"
      cy="24"
      r="22"
      :fill="active ? '#D32F2F' : 'white'"
      :stroke="active ? '#D32F2F' : '#E0E0E0'"
      stroke-width="2"
    />
    <path
      d="M16 20H32"
      :stroke="active ? 'white' : '#333'"
      stroke-width="2"
      stroke-linecap="round"
    />
    <path
      d="M19 28H29"
      :stroke="active ? 'white' : '#333'"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  active?: boolean
}>()
</script>
