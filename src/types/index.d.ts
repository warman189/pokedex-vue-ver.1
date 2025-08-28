export interface PokemonListItem {
    name: string;
    url: string;
}
export interface Pokemon extends PokemonListItem {
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
                    };
                };
            };
        };
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
    description?: string;
}
export interface PokemonSpecies {
    flavor_text_entries: {
        flavor_text: string;
        language: {
            name: string;
        };
    }[];
}
