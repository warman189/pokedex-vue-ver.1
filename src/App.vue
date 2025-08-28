<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import AppHeader from './components/AppHeader.vue'
import PokemonList from './components/PokemonList.vue'
import PokemonDetail from './components/PokemonDetail.vue'
import DynamicBackground from './components/DynamicBackground.vue'
import ScrollButtons from './components/ScrollButtons.vue'
import { usePokemon } from './composables/usePokemon'
import type { PokemonListItem } from './types'
import { getTypeColor } from './utils/pokemonTypes'
import { lockScroll, unlockScroll } from './utils/scrollLock'

const {
  pokemons,
  isLoadingPage,
  loadMore,
  hasMore,
  pageSize,
  resetList,
  selectedPokemon,
  selectPokemon,
  clearSelection,
  navigatePokemon,
  setSortOrder,
  setSearchTerm,
} = usePokemon()

const activeType = ref<string | null>(null)

watch(selectedPokemon, (pokemon) => {
  if (pokemon) {
    lockScroll()
    activeType.value = pokemon.types[0]?.type.name || null
  } else {
    unlockScroll()
    activeType.value = null
  }
})

const handlePokemonHover = (type: string | null) => {
  if (!selectedPokemon.value) {
    activeType.value = type
  }
}

watch(
  activeType,
  (type) => {
    const root = document.documentElement
    if (type) {
      const color = getTypeColor(type)
      root.style.setProperty('--scrollbar-color', color)
      root.style.setProperty('--scrollbar-thumb', color)
    } else {
      root.style.removeProperty('--scrollbar-color')
      root.style.removeProperty('--scrollbar-thumb')
    }
  },
  { immediate: true },
)

const isDarkMode = ref(false)

const onSelectPokemon = (pokemon: PokemonListItem) => {
  selectPokemon(pokemon.url)
}

const handleHome = () => {
  clearSelection()
  resetList()
}

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

const themeClass = computed(() => (isDarkMode.value ? 'dark' : 'light'))
</script>

<template>
  <div :class="[themeClass, { 'has-modal': !!selectedPokemon } ]">
    <DynamicBackground :active-type="activeType" />
    <div class="app-container">
      <AppHeader
        @search="setSearchTerm"
        @sort="setSortOrder"
        @select-pokemon="onSelectPokemon"
        @home="handleHome"
        @toggle-theme="toggleTheme"
        :is-dark-mode="isDarkMode"
      />
      <main>
        <PokemonList
          :pokemons="pokemons"
          :is-loading-page="isLoadingPage"
          :has-more="hasMore"
          :page-size="pageSize"
          @select-pokemon="onSelectPokemon"
          @pokemon-hover="handlePokemonHover"
          @load-more="loadMore"
        />
        <PokemonDetail
          :pokemon="selectedPokemon"
          @close="clearSelection"
          @prev="() => navigatePokemon('prev')"
          @next="() => navigatePokemon('next')"
        />
        <ScrollButtons />
      </main>
    </div>
  </div>
</template>

<style>
:root {
  --background-color-light: #f0f0f0;
  --text-color-light: #333;
  --card-bg-light: #fff;

  --background-color-dark: #1a1a1a;
  --text-color-dark: #f0f0f0;
  --card-bg-dark: #2a2a2a;
}

.light {
  --background-color: var(--background-color-light);
  --text-color: var(--text-color-light);
  --card-bg: var(--card-bg-light);
}

.dark {
  --background-color: var(--background-color-dark);
  --text-color: var(--text-color-dark);
  --card-bg: var(--card-bg-dark);
}

body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background-color);
  color: var(--text-color);
  transition:
    background-color 0.3s,
    color 0.3s;
}

/* Scrollbar themed by active type color via CSS var --scrollbar-color */
:root {
  --scrollbar-color: #dc0a2d;
}
* {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb, var(--scrollbar-color)) transparent;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb, var(--scrollbar-color));
  border-radius: 8px;
  border: 2px solid transparent;
  background-clip: content-box;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Optional fallback blur of the main content when modal is open (for browsers without backdrop-filter coverage) */
.has-modal .app-container {
  filter: blur(6px) saturate(0.9);
  transition: filter 0.2s ease;
}
</style>
