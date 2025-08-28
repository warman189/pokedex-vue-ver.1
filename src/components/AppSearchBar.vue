<template>
  <div class="search-bar-container" v-on-click-outside="() => (isFocused = false)">
    <div class="search-bar">
      <IconSearch class="search-icon" />
      <input
        type="text"
        v-model="query"
        @input="onInput"
        @focus="isFocused = true"
        placeholder="Search by name or ID"
      />
    </div>
    <SearchDropdown v-if="isFocused && query" :results="searchResults" @select="onPokemonSelect" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import IconSearch from './icons/IconSearch.vue'
import SearchDropdown from './SearchDropdown.vue'
import { usePokemon } from '../composables/usePokemon'
import type { PokemonListItem } from '../types'

const emit = defineEmits(['search', 'select-pokemon'])

const query = ref('')
const isFocused = ref(false)
const { pokemons } = usePokemon()

const searchResults = computed(() => {
  if (!query.value) return []
  const lowerCaseQuery = query.value.toLowerCase()
  return pokemons.value.filter(
    (p: PokemonListItem) =>
      p.name.toLowerCase().includes(lowerCaseQuery) ||
      p.url.split('/').filter(Boolean).pop()?.includes(lowerCaseQuery),
  )
})

const onInput = () => {
  emit('search', query.value)
}

const onPokemonSelect = (pokemon: PokemonListItem) => {
  isFocused.value = false
  query.value = ''
  emit('select-pokemon', pokemon)
}
</script>

<style scoped>
.search-bar-container {
  position: relative;
  width: 100%;
}

.search-bar {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 10px;
  color: #dc0a2d;
}

.search-bar input {
  padding: 0.5rem 0.5rem 0.5rem 35px;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  width: 100%;
  box-shadow: inset 0 1px 3px 1px rgba(0, 0, 0, 0.25);
}
</style>
