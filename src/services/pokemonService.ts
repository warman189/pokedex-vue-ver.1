import type { Pokemon, PokemonListItem, PokemonSpecies } from '../types'

const API_URL = 'https://pokeapi.co/api/v2'

export interface PokemonListResponse {
  count: number
  next: string | null
  previous: string | null
  results: PokemonListItem[]
}

export async function fetchPokemons(limit = 24, offset = 0): Promise<PokemonListResponse> {
  const response = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`)
  const data = await response.json()
  return data as PokemonListResponse
}

export async function fetchPokemonDetails(url: string): Promise<Pokemon> {
  const response = await fetch(url)
  return await response.json()
}

export async function fetchPokemonSpecies(url: string): Promise<PokemonSpecies> {
  const response = await fetch(url)
  return await response.json()
}
