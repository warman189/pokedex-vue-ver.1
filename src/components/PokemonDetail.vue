<template>
  <div v-if="pokemon" class="pokemon-detail-overlay" @click.self="close">
    <div class="pokemon-detail-card">
      <div class="pokemon-detail-header" :style="{ backgroundColor: typeColor }">
        <div class="header-top">
          <button class="back-button" @click="close">
            <IconArrowLeft />
          </button>
          <h2 class="pokemon-name-header">{{ capitalizedPokemonName }}</h2>
          <span class="pokemon-id-header">{{ formattedId }}</span>
        </div>
        <div class="pokemon-pokeball-img">
          <img src="../assets/Pokeball.png" alt="Pokéball" class="pokeball" />
        </div>
        <div class="pokemon-image-container">
          <img
            :src="imageUrl"
            @error="onImageError"
            :alt="pokemon.name"
            class="pokemon-image-large"
          />
        </div>
      </div>

      <div class="pokemon-detail-body">
        <div class="pokemon-types">
          <span
            v-for="typeInfo in pokemon.types"
            :key="typeInfo.type.name"
            class="type-badge"
            :style="{ backgroundColor: getTypeColor(typeInfo.type.name) }"
          >
            {{ capitalize(typeInfo.type.name) }}
          </span>
        </div>

        <h3 class="about-title" :style="{ color: typeColor }">About</h3>

        <div class="pokemon-measurements">
          <div class="measurement-item">
            <div class="measurement-value">
              <IconWeight />
              <span>{{ pokemon.weight / 10 }} kg</span>
            </div>
            <span class="measurement-label">Weight</span>
          </div>
          <div class="measurement-divider"></div>
          <div class="measurement-item">
            <div class="measurement-value">
              <IconHeight />
              <span>{{ pokemon.height / 10 }} m</span>
            </div>
            <span class="measurement-label">Height</span>
          </div>
          <div class="measurement-divider"></div>
          <div class="measurement-item">
            <div class="measurement-value moves">
              <div v-if="pokemon.moves.length > 0">
                {{ capitalize(pokemon.moves[0].move.name) }}
              </div>
              <div v-if="pokemon.moves.length > 1">
                {{ capitalize(pokemon.moves[1].move.name) }}
              </div>
            </div>
            <span class="measurement-label">Moves</span>
          </div>
        </div>

        <p class="pokemon-description">
          {{ pokemon.description }}
        </p>

        <h3 class="stats-title" :style="{ color: typeColor }">Base Stats</h3>
        <div class="stats-container" :key="pokemon.id">
          <div v-for="stat in pokemon.stats" :key="stat.stat.name" class="stat">
            <span class="stat-name" :style="{ color: typeColor }">{{
              getStatName(stat.stat.name)
            }}</span>
            <span class="stat-value">{{ String(stat.base_stat).padStart(3, '0') }}</span>
            <div class="progress-bar">
              <div
                class="progress"
                :style="{ width: `${(stat.base_stat / 255) * 100}%`, backgroundColor: typeColor }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-arrow left" @click="prev">&#10094;</div>
    <div class="nav-arrow right" @click="next">&#10095;</div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref, watch } from 'vue'
import type { Pokemon } from '../types'
import { getTypeColor } from '../utils/pokemonTypes'
import { defineEmits } from 'vue'
import placeholder from '../assets/char.png'
import { statNameMapping } from '../utils/stats'
import IconArrowLeft from './icons/IconArrowLeft.vue'
import IconWeight from './icons/IconWeight.vue'
import IconHeight from './icons/IconHeight.vue'

const props = defineProps<{
  pokemon: Pokemon | null
}>()

const imageUrl = ref('')

watch(
  () => props.pokemon,
  (newPokemon) => {
    if (newPokemon) {
      imageUrl.value =
        newPokemon.sprites.other['official-artwork'].front_default ||
        newPokemon.sprites.front_default ||
        ''
    }
  },
  { immediate: true },
)

const onImageError = () => {
  imageUrl.value = placeholder
}

const emit = defineEmits(['close', 'prev', 'next'])

const typeColor = computed(() => {
  if (!props.pokemon) return '#CCC'
  const typeName = props.pokemon.types[0]?.type.name || 'normal'
  return getTypeColor(typeName)
})

const formattedId = computed(() => {
  return props.pokemon ? `#${String(props.pokemon.id).padStart(3, '0')}` : ''
})

const capitalizedPokemonName = computed(() => {
  return props.pokemon ? capitalize(props.pokemon.name) : ''
})

const getStatName = (name: string) => {
  return statNameMapping[name] || name.substring(0, 3).toUpperCase()
}

const capitalize = (text: string) => {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const close = () => emit('close')
const prev = () => emit('prev')
const next = () => emit('next')
</script>

<style scoped>
.pokemon-detail-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.pokemon-detail-card {
  width: 90%;
  max-width: 480px;
  height: fit-content;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  animation: slide-up 0.4s ease-out;
}

@keyframes slide-up {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.pokemon-detail-header {
  padding: 20px;
  color: white;
  position: relative;
  min-height: 200px;
}
.pokemon-pokeball-img {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  opacity: 0.2;
  animation: spin 30s linear infinite;
}
.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 24px;
  padding: 0;
}

.back-button :deep(svg) {
  width: 28px;
  height: 28px;
}

.pokemon-name-header {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  flex-grow: 1;
  padding-left: 1rem;
}

.pokemon-id-header {
  font-size: 1.2rem;
  font-weight: bold;
}

.pokemon-image-container {
  position: absolute;
  bottom: -75px; /* Pulls the image down to overlap */
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

.pokemon-image-large {
  width: 200px;
  height: 200px;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));
}

.pokemon-detail-body {
  padding: 90px 20px 20px; /* Top padding to account for overlapping image */
  overflow-y: auto;
  text-align: center;
  flex-grow: 1;
}

.pokemon-types {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.type-badge {
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
}

.about-title,
.stats-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 20px 0 10px;
}

.pokemon-measurements {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20px 0;
  gap: 15px;
}

.measurement-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  min-width: 80px;
}

.measurement-value {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.measurement-value :deep(svg) {
  width: 20px;
  height: 20px;
  opacity: 0.6;
}

.measurement-label {
  font-size: 0.8rem;
  color: #666;
}

.moves {
  font-size: 0.9rem;
  text-align: center;
  height: 2.2em; /* Ensure consistent height */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.measurement-divider {
  width: 1px;
  background-color: #e0e0e0;
  align-self: stretch;
}

.pokemon-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  text-align: center;
  margin: 0 auto 20px;
  max-width: 400px;
}

.stats-container {
  padding: 0 10px;
}

.stat {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
}

.stat-name {
  width: 50px;
  font-weight: bold;
  text-align: right;
  font-size: 0.9rem;
}

.stat-value {
  width: 35px;
  font-weight: 500;
  font-size: 0.9rem;
}

.progress-bar {
  flex-grow: 1;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.progress {
  height: 100%;
  border-radius: 4px;
  animation: fill-progress 1s ease-in-out;
}

@keyframes fill-progress {
  from {
    width: 0%;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.nav-arrow {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  user-select: none;
  z-index: 1001;
  transition: color 0.2s;
}
.nav-arrow:hover {
  color: white;
}

.left {
  left: 20px;
}

.right {
  right: 20px;
}

@media (max-width: 600px) {
  .left {
    left: 5px;
  }
  .right {
    right: 5px;
  }
  .pokemon-name-header {
    font-size: 1.5rem;
  }
}

@media (max-width: 425px) {
  .pokemon-detail-card {
    width: 100%;
    height: 100%;
    max-height: none;
    border-radius: 0;
  }
  .nav-arrow {
    font-size: 2rem;
  }
  .pokemon-name-header {
    font-size: 1.3rem;
  }
  .pokemon-id-header {
    font-size: 1rem;
  }
}
</style>
