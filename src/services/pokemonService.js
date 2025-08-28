const API_URL = 'https://pokeapi.co/api/v2';
export async function fetchPokemons(limit = 24, offset = 0) {
    const response = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    return data;
}
export async function fetchPokemonDetails(url) {
    const response = await fetch(url);
    return await response.json();
}
export async function fetchPokemonSpecies(url) {
    const response = await fetch(url);
    return await response.json();
}
