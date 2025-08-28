<template>
  <header class="header">
    <div class="logo-container">
      <img src="../assets/logo/Pokeball.png" alt="Pokédex Logo" class="logo" />
      <h1 class="title">Pokédex</h1>
    </div>
    <div class="controls">
      <SearchBar @search="handleSearch" />
      <Filter @filter="handleFilter" />
      <button @click="toggleTheme">Change Theme</button>
    </div>
  </header>
</template>

<script setup lang="ts">
import SearchBar from './SearchBar.vue'
import Filter from './Filter.vue'

const emit = defineEmits(['search', 'filter'])

const handleSearch = (query: string) => {
  emit('search', query)
}

const handleFilter = (filter: string) => {
  emit('filter', filter)
}

const toggleTheme = () => {
  document.body.classList.toggle('dark-theme')
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--header-background);
  color: white;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  margin-right: 1rem;
}

.title {
  font-size: 1.5rem;
  margin: 0;
}

.controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
