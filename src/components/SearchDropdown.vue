<template>
  <ul class="search-dropdown">
    <SearchDropdownItem
      v-for="pokemon in results"
      :key="pokemon.name"
      :pokemon="pokemon"
      @select="$emit('select', pokemon)"
    />
  </ul>
</template>

<script setup lang="ts">
import SearchDropdownItem from './SearchDropdownItem.vue'
import type { PokemonListItem } from '../types'

defineProps<{
  results: PokemonListItem[]
}>()

defineEmits(['select'])
</script>

<style scoped>
.search-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-top: none;
  border-radius: 0 0 16px 16px;
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
