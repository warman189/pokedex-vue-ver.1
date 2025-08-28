<template>
  <div
    class="pokemon-card"
    :style="{ borderColor: typeColor }"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div v-if="isLoading" class="card-loading">
      <div class="spinner"></div>
    </div>
    <div v-else-if="detailedPokemon">
      <span class="pokemon-id" :style="{ color: typeColor }">{{ formattedId }}</span>
      <img :src="imageUrl" :alt="capitalizedPokemonName" @error="onImageError" />
      <h3 class="pokemon-name" :style="{ backgroundColor: typeColor }">
        {{ capitalizedPokemonName }}
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { Pokemon, PokemonListItem } from '../types'
import { getTypeColor } from '../utils/pokemonTypes'
import { fetchPokemonDetails } from '../services/pokemonService'
import placeholder from '../assets/char.png'

const props = defineProps<{
  pokemon: PokemonListItem
}>()

const emit = defineEmits(['click', 'mouseenter', 'mouseleave'])

const detailedPokemon = ref<Pokemon | null>(null)
const imageUrl = ref('')
const isLoading = ref(true)

const primaryType = computed(() => detailedPokemon.value?.types[0]?.type.name || null)

const fetchDetails = async () => {
  isLoading.value = true
  try {
    const data = await fetchPokemonDetails(props.pokemon.url)
    detailedPokemon.value = data
    imageUrl.value =
      data.sprites.other['official-artwork'].front_default || data.sprites.front_default || ''
    if (!imageUrl.value) {
      onImageError()
    }
  } catch (error) {
    console.error('Failed to fetch pokemon details for card:', error)
    onImageError()
  } finally {
    isLoading.value = false
  }
}

watch(() => props.pokemon, fetchDetails, { immediate: true })

const onImageError = () => {
  imageUrl.value = placeholder
}

const formattedId = computed(() => {
  return detailedPokemon.value ? `#${String(detailedPokemon.value.id).padStart(3, '0')}` : ''
})

const typeColor = computed(() => {
  if (!detailedPokemon.value) return '#CCC'
  const typeName = detailedPokemon.value.types[0]?.type.name || 'normal'
  return getTypeColor(typeName)
})

const capitalizedPokemonName = computed(() => {
  return props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)
})

const onClick = () => {
  emit('click')
}

const onMouseEnter = () => {
  emit('mouseenter', primaryType.value)
}

const onMouseLeave = () => {
  emit('mouseleave', null)
}
</script>

<style scoped>
.pokemon-card {
  border: 4px solid;
  border-radius: 15px;
  padding: 2rem 0 0 0;
  text-align: center;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  position: relative;
  background-color: var(--card-bg);
}

.pokemon-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.pokemon-id {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.9rem;
  font-weight: bold;
  color: #999;
}

img {
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
}

.pokemon-name {
  margin: 0;
  color: white;
  padding: 0.5rem;
  font-size: 1.1rem;
}

.card-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 190px; /* Match card height */
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
