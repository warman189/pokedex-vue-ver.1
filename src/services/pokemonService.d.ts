import type { Pokemon, PokemonListItem, PokemonSpecies } from '../types';
export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonListItem[];
}
export declare function fetchPokemons(limit?: number, offset?: number): Promise<PokemonListResponse>;
export declare function fetchPokemonDetails(url: string): Promise<Pokemon>;
export declare function fetchPokemonSpecies(url: string): Promise<PokemonSpecies>;
