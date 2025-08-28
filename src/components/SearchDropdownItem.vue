<template>
  <li class="dropdown-item" @click="$emit('select')">
    <div v-if="detailedPokemon" class="item-content">
      <img :src="animatedSprite" :alt="pokemon.name" class="pokemon-sprite" />
      <span class="pokemon-name" :style="{ color: typeColor }">{{ capitalizedPokemonName }}</span>
    </div>
    <div v-else class="item-loading">
      <span>Loading...</span>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { fetchPokemonDetails } from '../services/pokemonService'
import { getTypeColor } from '../utils/pokemonTypes'
import type { Pokemon, PokemonListItem } from '../types'

const props = defineProps<{
  pokemon: PokemonListItem
}>()

defineEmits(['select'])

const detailedPokemon = ref<Pokemon | null>(null)

const fetchDetails = async () => {
  try {
    detailedPokemon.value = await fetchPokemonDetails(props.pokemon.url)
  } catch (error) {
    console.error('Failed to fetch details for dropdown item:', error)
  }
}

onMounted(fetchDetails)
watch(() => props.pokemon, fetchDetails)

const animatedSprite = computed(() => {
  return (
    detailedPokemon.value?.sprites?.versions?.['generation-v']?.['black-white']?.animated
      ?.front_default ||
    detailedPokemon.value?.sprites?.front_default ||
    ''
  )
})

const typeColor = computed(() => {
  if (!detailedPokemon.value) return 'inherit'
  const typeName = detailedPokemon.value.types[0]?.type.name || 'normal'
  return getTypeColor(typeName)
})

const capitalizedPokemonName = computed(() => {
  return props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)
})
</script>

<style scoped>
.dropdown-item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.dropdown-item:hover {
  background-color: rgba(128, 128, 128, 0.2);
}

.item-content {
  display: flex;
  align-items: center;
}

.pokemon-sprite {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.pokemon-name {
  font-weight: bold;
}

.item-loading {
  padding: 0.5rem;
  color: #888;
}
</style>
