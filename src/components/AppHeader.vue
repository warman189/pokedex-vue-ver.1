<template>
  <header class="header">
    <div class="logo-container">
      <button class="logo-button" type="button" @click="goHome">
        <img src="../assets/logo/Pokeball.png" alt="Pokédex Logo" class="logo" />
        <h1 class="title">Pokédex</h1>
      </button>
    </div>
    <div class="controls">
      <AppSearchBar @search="handleSearch" @select-pokemon="handleSelectFromSearch" />
      <AppFilter @sort="handleSort" />
    </div>
  </header>
</template>

<script setup lang="ts">
import AppSearchBar from './AppSearchBar.vue'
import AppFilter from './AppFilter.vue'
import { defineEmits } from 'vue'
import { vibrate } from '../utils/haptics'

const emit = defineEmits(['search', 'sort', 'select-pokemon', 'home'])

const handleSearch = (query: string) => {
  emit('search', query)
}

const handleSort = (filter: string) => {
  emit('sort', filter)
}

import type { PokemonListItem } from '../types'
const handleSelectFromSearch = (pokemon: PokemonListItem) => {
  emit('select-pokemon', pokemon)
}

const goHome = () => {
  vibrate(10)
  emit('home')
}
</script>

<style scoped>
.header {
  border-radius: 0 0 25px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #dc0a2d;
  color: white;
  flex-wrap: wrap;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
}
.logo {
  height: 50px;
  margin: 0;
  will-change: transform;
  transition: transform 0.2s ease;
}
.logo-button:hover .logo {
  animation: bounce 0.6s cubic-bezier(0.28, 0.84, 0.42, 1) both;
}

.title {
  font-size: 1.5rem;
  margin: 0;
  color: #ffffff;
}

.controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
}

@media (max-width: 425px) {
  .logo {
    height: 40px;
  }
  .title {
    font-size: 1.2rem;
  }
  .controls {
    flex-direction: column;
    width: 100%;
  }
}

@keyframes bounce {
  0% {
    transform: translateY(0) scale(1);
  }
  20% {
    transform: translateY(-6px) scale(1.02);
  }
  40% {
    transform: translateY(0) scale(0.98);
  }
  60% {
    transform: translateY(-3px) scale(1.01);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}
</style>
