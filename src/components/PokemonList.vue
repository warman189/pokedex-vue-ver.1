<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import PokemonCard from './PokemonCard.vue'
import SkeletonCard from './SkeletonCard.vue'
import type { PokemonListItem } from '../types'

const props = defineProps<{
  pokemons: PokemonListItem[]
  isLoadingPage?: boolean
  hasMore?: boolean
  pageSize?: number
}>()

const emit = defineEmits(['select-pokemon', 'pokemon-hover', 'load-more'])

const handleSelectPokemon = (pokemon: PokemonListItem) => {
  emit('select-pokemon', pokemon)
}

const handlePokemonHover = (type: string | null) => {
  emit('pokemon-hover', type)
}
const sentinel = ref<HTMLDivElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry && entry.isIntersecting) {
        if (props.hasMore && !props.isLoadingPage) {
          emit('load-more')
        }
      }
    },
    { root: null, rootMargin: '0px 0px 300px 0px', threshold: 0 },
  )
  if (sentinel.value) observer.observe(sentinel.value)
})

onBeforeUnmount(() => {
  if (observer && sentinel.value) observer.unobserve(sentinel.value)
  observer = null
})
</script>

<template>
  <div class="pokemon-list">
    <transition-group name="list" tag="div" class="grid">
      <PokemonCard
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :pokemon="pokemon"
        @click="handleSelectPokemon(pokemon)"
        @mouseenter="handlePokemonHover"
        @mouseleave="handlePokemonHover"
      />
    </transition-group>
    <!-- skeletons during loading -->
    <div v-if="isLoadingPage" class="grid">
      <SkeletonCard v-for="i in pageSize || 0" :key="'skeleton-' + i" />
    </div>
    <!-- intersection observer sentinel -->
    <div ref="sentinel" class="sentinel" />
  </div>
</template>

<style scoped>
.pokemon-list {
  padding: 1rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

@media (max-width: 425px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}

@media (max-width: 375px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

/* list enter animation */
.list-enter-active,
.list-leave-active {
  transition: all 0.25s ease;
}
.list-enter-from {
  opacity: 0;
  transform: scale(0.98);
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.sentinel {
  height: 1px;
}
</style>
