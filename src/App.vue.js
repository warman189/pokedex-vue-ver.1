import { ref, computed, watch } from 'vue';
import AppHeader from './components/AppHeader.vue';
import PokemonList from './components/PokemonList.vue';
import PokemonDetail from './components/PokemonDetail.vue';
import DynamicBackground from './components/DynamicBackground.vue';
import ScrollButtons from './components/ScrollButtons.vue';
import { usePokemon } from './composables/usePokemon';
import { getTypeColor } from './utils/pokemonTypes';
const { pokemons, isLoadingPage, loadMore, hasMore, pageSize, resetList, selectedPokemon, selectPokemon, clearSelection, navigatePokemon, setSortOrder, setSearchTerm, } = usePokemon();
const activeType = ref(null);
watch(selectedPokemon, (pokemon) => {
    if (pokemon) {
        document.body.style.overflow = 'hidden';
        activeType.value = pokemon.types[0]?.type.name || null;
    }
    else {
        document.body.style.overflow = '';
        activeType.value = null;
    }
});
const handlePokemonHover = (type) => {
    if (!selectedPokemon.value) {
        activeType.value = type;
    }
};
watch(activeType, (type) => {
    const root = document.documentElement;
    if (type) {
        const color = getTypeColor(type);
        root.style.setProperty('--scrollbar-color', color);
        root.style.setProperty('--scrollbar-thumb', color);
    }
    else {
        root.style.removeProperty('--scrollbar-color');
        root.style.removeProperty('--scrollbar-thumb');
    }
}, { immediate: true });
const isDarkMode = ref(false);
const onSelectPokemon = (pokemon) => {
    selectPokemon(pokemon.url);
};
const handleHome = () => {
    clearSelection();
    resetList();
};
const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
};
const themeClass = computed(() => (isDarkMode.value ? 'dark' : 'light'));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: (__VLS_ctx.themeClass) },
});
// @ts-ignore
[themeClass,];
/** @type {[typeof DynamicBackground, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(DynamicBackground, new DynamicBackground({
    activeType: (__VLS_ctx.activeType),
}));
const __VLS_1 = __VLS_0({
    activeType: (__VLS_ctx.activeType),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
// @ts-ignore
[activeType,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "app-container" },
});
/** @type {[typeof AppHeader, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(AppHeader, new AppHeader({
    ...{ 'onSearch': {} },
    ...{ 'onSort': {} },
    ...{ 'onSelectPokemon': {} },
    ...{ 'onHome': {} },
    ...{ 'onToggleTheme': {} },
    isDarkMode: (__VLS_ctx.isDarkMode),
}));
const __VLS_5 = __VLS_4({
    ...{ 'onSearch': {} },
    ...{ 'onSort': {} },
    ...{ 'onSelectPokemon': {} },
    ...{ 'onHome': {} },
    ...{ 'onToggleTheme': {} },
    isDarkMode: (__VLS_ctx.isDarkMode),
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
let __VLS_7;
let __VLS_8;
const __VLS_9 = ({ search: {} },
    { onSearch: (__VLS_ctx.setSearchTerm) });
const __VLS_10 = ({ sort: {} },
    { onSort: (__VLS_ctx.setSortOrder) });
const __VLS_11 = ({ selectPokemon: {} },
    { onSelectPokemon: (__VLS_ctx.onSelectPokemon) });
const __VLS_12 = ({ home: {} },
    { onHome: (__VLS_ctx.handleHome) });
const __VLS_13 = ({ toggleTheme: {} },
    { onToggleTheme: (__VLS_ctx.toggleTheme) });
// @ts-ignore
[isDarkMode, setSearchTerm, setSortOrder, onSelectPokemon, handleHome, toggleTheme,];
var __VLS_6;
__VLS_asFunctionalElement(__VLS_elements.main, __VLS_elements.main)({});
/** @type {[typeof PokemonList, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(PokemonList, new PokemonList({
    ...{ 'onSelectPokemon': {} },
    ...{ 'onPokemonHover': {} },
    ...{ 'onLoadMore': {} },
    pokemons: (__VLS_ctx.pokemons),
    isLoadingPage: (__VLS_ctx.isLoadingPage),
    hasMore: (__VLS_ctx.hasMore),
    pageSize: (__VLS_ctx.pageSize),
}));
const __VLS_16 = __VLS_15({
    ...{ 'onSelectPokemon': {} },
    ...{ 'onPokemonHover': {} },
    ...{ 'onLoadMore': {} },
    pokemons: (__VLS_ctx.pokemons),
    isLoadingPage: (__VLS_ctx.isLoadingPage),
    hasMore: (__VLS_ctx.hasMore),
    pageSize: (__VLS_ctx.pageSize),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
let __VLS_18;
let __VLS_19;
const __VLS_20 = ({ selectPokemon: {} },
    { onSelectPokemon: (__VLS_ctx.onSelectPokemon) });
const __VLS_21 = ({ pokemonHover: {} },
    { onPokemonHover: (__VLS_ctx.handlePokemonHover) });
const __VLS_22 = ({ loadMore: {} },
    { onLoadMore: (__VLS_ctx.loadMore) });
// @ts-ignore
[onSelectPokemon, pokemons, isLoadingPage, hasMore, pageSize, handlePokemonHover, loadMore,];
var __VLS_17;
/** @type {[typeof PokemonDetail, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(PokemonDetail, new PokemonDetail({
    ...{ 'onClose': {} },
    ...{ 'onPrev': {} },
    ...{ 'onNext': {} },
    pokemon: (__VLS_ctx.selectedPokemon),
}));
const __VLS_25 = __VLS_24({
    ...{ 'onClose': {} },
    ...{ 'onPrev': {} },
    ...{ 'onNext': {} },
    pokemon: (__VLS_ctx.selectedPokemon),
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
let __VLS_27;
let __VLS_28;
const __VLS_29 = ({ close: {} },
    { onClose: (__VLS_ctx.clearSelection) });
const __VLS_30 = ({ prev: {} },
    { onPrev: (() => __VLS_ctx.navigatePokemon('prev')) });
const __VLS_31 = ({ next: {} },
    { onNext: (() => __VLS_ctx.navigatePokemon('next')) });
// @ts-ignore
[selectedPokemon, clearSelection, navigatePokemon, navigatePokemon,];
var __VLS_26;
/** @type {[typeof ScrollButtons, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(ScrollButtons, new ScrollButtons({}));
const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
/** @type {__VLS_StyleScopedClasses['app-container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        AppHeader: AppHeader,
        PokemonList: PokemonList,
        PokemonDetail: PokemonDetail,
        DynamicBackground: DynamicBackground,
        ScrollButtons: ScrollButtons,
        pokemons: pokemons,
        isLoadingPage: isLoadingPage,
        loadMore: loadMore,
        hasMore: hasMore,
        pageSize: pageSize,
        selectedPokemon: selectedPokemon,
        clearSelection: clearSelection,
        navigatePokemon: navigatePokemon,
        setSortOrder: setSortOrder,
        setSearchTerm: setSearchTerm,
        activeType: activeType,
        handlePokemonHover: handlePokemonHover,
        isDarkMode: isDarkMode,
        onSelectPokemon: onSelectPokemon,
        handleHome: handleHome,
        toggleTheme: toggleTheme,
        themeClass: themeClass,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
