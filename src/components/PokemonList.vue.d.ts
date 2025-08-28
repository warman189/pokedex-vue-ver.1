import type { PokemonListItem } from '../types';
type __VLS_Props = {
    pokemons: PokemonListItem[];
    isLoadingPage?: boolean;
    hasMore?: boolean;
    pageSize?: number;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "select-pokemon": (...args: any[]) => void;
    "pokemon-hover": (...args: any[]) => void;
    "load-more": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onSelect-pokemon"?: ((...args: any[]) => any) | undefined;
    "onPokemon-hover"?: ((...args: any[]) => any) | undefined;
    "onLoad-more"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
