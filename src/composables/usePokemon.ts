import { ref, computed, onMounted } from 'vue'
import { fetchPokemons, fetchPokemonDetails, fetchPokemonSpecies } from '@/services/pokemonService'
import type { Pokemon, PokemonListItem, PokemonSpecies } from '../types'

export function usePokemon() {
  const pokemons = ref<PokemonListItem[]>([])
  const isLoadingPage = ref(false)
  const hasMore = ref(true)
  const pageSize = ref(24) // ровно такое же количество, как первая загрузка
  const offset = ref(0)
  const selectedPokemon = ref<Pokemon | null>(null)
  const searchTerm = ref('')
  const sortOrder = ref('id-asc')

  const loadInitial = async () => {
    if (isLoadingPage.value) return
    isLoadingPage.value = true
    try {
      const { results, next, count } = await fetchPokemons(pageSize.value, 0)
      pokemons.value = results
      offset.value = results.length
      hasMore.value = Boolean(next) && offset.value < count
    } finally {
      isLoadingPage.value = false
    }
  }

  const loadMore = async () => {
    if (isLoadingPage.value || !hasMore.value) return
    isLoadingPage.value = true
    try {
      const { results, next, count } = await fetchPokemons(pageSize.value, offset.value)
      pokemons.value = pokemons.value.concat(results)
      offset.value += results.length
      hasMore.value = Boolean(next) && offset.value < count
    } finally {
      isLoadingPage.value = false
    }
  }

  onMounted(loadInitial)

  const resetList = async () => {
    searchTerm.value = ''
    sortOrder.value = 'id-asc'
    pokemons.value = []
    offset.value = 0
    hasMore.value = true
    await loadInitial()
  }

  const filteredAndSortedPokemons = computed(() => {
    const filtered = pokemons.value.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        p.url.split('/').filter(Boolean).pop()?.includes(searchTerm.value),
    )

    return filtered.sort((a, b) => {
      const idA = Number(a.url.split('/').filter(Boolean).pop())
      const idB = Number(b.url.split('/').filter(Boolean).pop())

      switch (sortOrder.value) {
        case 'name-asc':
          return a.name.localeCompare(b.name)
        case 'name-desc':
          return b.name.localeCompare(a.name)
        case 'id-desc':
          return idB - idA
        case 'id-asc':
        default:
          return idA - idB
      }
    })
  })

  const selectPokemon = async (pokemonIdentifier: string | number) => {
    const url =
      typeof pokemonIdentifier === 'string' && pokemonIdentifier.startsWith('http')
        ? pokemonIdentifier
        : `${'https://pokeapi.co/api/v2'}/pokemon/${pokemonIdentifier}`

    const details = await fetchPokemonDetails(url)
    const speciesData: PokemonSpecies = await fetchPokemonSpecies(details.species.url)
    const englishEntry = speciesData.flavor_text_entries.find(
      (entry) => entry.language.name === 'en',
    )

    selectedPokemon.value = {
      ...details,
      description: englishEntry
        ? englishEntry.flavor_text.replace(/\f/g, ' ')
        : 'No description available.',
    }
  }

  const clearSelection = () => {
    selectedPokemon.value = null
  }

  const navigatePokemon = async (direction: 'prev' | 'next') => {
    if (!selectedPokemon.value) return

    const currentId = selectedPokemon.value.id
    const currentIndex = filteredAndSortedPokemons.value.findIndex(
      (p) => Number(p.url.split('/').filter(Boolean).pop()) === currentId,
    )

    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1

    if (newIndex >= 0 && newIndex < filteredAndSortedPokemons.value.length) {
      const nextPokemon = filteredAndSortedPokemons.value[newIndex]
      await selectPokemon(nextPokemon.url)
    }
  }

  const setSearchTerm = (term: string) => {
    searchTerm.value = term
  }

  const setSortOrder = (order: string) => {
    sortOrder.value = order
  }

  return {
    pokemons: filteredAndSortedPokemons,
    isLoadingPage,
    loadMore,
    hasMore,
    pageSize,
    resetList,
    selectedPokemon,
    selectPokemon,
    clearSelection,
    navigatePokemon,
    setSearchTerm,
    setSortOrder,
  }
}
