<template>
  <div class="filter">
    <select @change="onFilterChange">
      <option value="id-asc">ID (Asc)</option>
      <option value="id-desc">ID (Desc)</option>
      <option value="name-asc">Name (A-Z)</option>
      <option value="name-desc">Name (Z-A)</option>
    </select>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['filter'])

const onFilterChange = (event: Event) => {
  emit('filter', (event.target as HTMLSelectElement).value)
}
</script>

<style scoped>
.filter select {
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
}
</style>
