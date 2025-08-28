import type { Pokemon } from '../types';
export declare function usePokemon(): {
    pokemons: import("vue").ComputedRef<{
        name: string;
        url: string;
    }[]>;
    isLoadingPage: import("vue").Ref<boolean, boolean>;
    loadMore: () => Promise<void>;
    hasMore: import("vue").Ref<boolean, boolean>;
    pageSize: import("vue").Ref<number, number>;
    resetList: () => Promise<void>;
    selectedPokemon: import("vue").Ref<{
        id: number;
        sprites: {
            front_default: string;
            other: {
                'official-artwork': {
                    front_default: string;
                };
            };
            versions?: {
                'generation-v': {
                    'black-white': {
                        animated?: {
                            front_default: string;
                        } | undefined;
                    };
                };
            } | undefined;
        };
        types: {
            type: {
                name: string;
            };
        }[];
        weight: number;
        height: number;
        stats: {
            base_stat: number;
            stat: {
                name: string;
            };
        }[];
        abilities: {
            ability: {
                name: string;
            };
        }[];
        moves: {
            move: {
                name: string;
            };
        }[];
        species: {
            url: string;
        };
        description?: string | undefined;
        name: string;
        url: string;
    } | null, Pokemon | {
        id: number;
        sprites: {
            front_default: string;
            other: {
                'official-artwork': {
                    front_default: string;
                };
            };
            versions?: {
                'generation-v': {
                    'black-white': {
                        animated?: {
                            front_default: string;
                        } | undefined;
                    };
                };
            } | undefined;
        };
        types: {
            type: {
                name: string;
            };
        }[];
        weight: number;
        height: number;
        stats: {
            base_stat: number;
            stat: {
                name: string;
            };
        }[];
        abilities: {
            ability: {
                name: string;
            };
        }[];
        moves: {
            move: {
                name: string;
            };
        }[];
        species: {
            url: string;
        };
        description?: string | undefined;
        name: string;
        url: string;
    } | null>;
    selectPokemon: (pokemonIdentifier: string | number) => Promise<void>;
    clearSelection: () => void;
    navigatePokemon: (direction: "prev" | "next") => Promise<void>;
    setSearchTerm: (term: string) => void;
    setSortOrder: (order: string) => void;
};
