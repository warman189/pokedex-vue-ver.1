import { ref, computed, defineEmits } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import IconSearch from './icons/IconSearch.vue';
import SearchDropdown from './SearchDropdown.vue';
import { usePokemon } from '../composables/usePokemon';
const emit = defineEmits(['search', 'select-pokemon']);
const query = ref('');
const isFocused = ref(false);
const { pokemons } = usePokemon();
const searchResults = computed(() => {
    if (!query.value)
        return [];
    const lowerCaseQuery = query.value.toLowerCase();
    return pokemons.value.filter((p) => p.name.toLowerCase().includes(lowerCaseQuery) ||
        p.url.split('/').filter(Boolean).pop()?.includes(lowerCaseQuery));
});
const onInput = () => {
    emit('search', query.value);
};
const onPokemonSelect = (pokemon) => {
    isFocused.value = false;
    query.value = '';
    emit('select-pokemon', pokemon);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['search-bar']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "search-bar-container" },
});
__VLS_asFunctionalDirective(__VLS_directives.vOnClickOutside)(null, { ...__VLS_directiveBindingRestFields, value: (() => (__VLS_ctx.isFocused = false)) }, null, null);
// @ts-ignore
[vOnClickOutside, isFocused,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "search-bar" },
});
/** @type {[typeof IconSearch, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(IconSearch, new IconSearch({
    ...{ class: "search-icon" },
}));
const __VLS_1 = __VLS_0({
    ...{ class: "search-icon" },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_elements.input)({
    ...{ onInput: (__VLS_ctx.onInput) },
    ...{ onFocus: (...[$event]) => {
            __VLS_ctx.isFocused = true;
            // @ts-ignore
            [isFocused, onInput,];
        } },
    type: "text",
    value: (__VLS_ctx.query),
    placeholder: "Search by name or ID",
});
// @ts-ignore
[query,];
if (__VLS_ctx.isFocused && __VLS_ctx.query) {
    // @ts-ignore
    [isFocused, query,];
    /** @type {[typeof SearchDropdown, ]} */ ;
    // @ts-ignore
    const __VLS_4 = __VLS_asFunctionalComponent(SearchDropdown, new SearchDropdown({
        ...{ 'onSelect': {} },
        results: (__VLS_ctx.searchResults),
    }));
    const __VLS_5 = __VLS_4({
        ...{ 'onSelect': {} },
        results: (__VLS_ctx.searchResults),
    }, ...__VLS_functionalComponentArgsRest(__VLS_4));
    let __VLS_7;
    let __VLS_8;
    const __VLS_9 = ({ select: {} },
        { onSelect: (__VLS_ctx.onPokemonSelect) });
    // @ts-ignore
    [searchResults, onPokemonSelect,];
    var __VLS_6;
}
/** @type {__VLS_StyleScopedClasses['search-bar-container']} */ ;
/** @type {__VLS_StyleScopedClasses['search-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['search-icon']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        vOnClickOutside: vOnClickOutside,
        IconSearch: IconSearch,
        SearchDropdown: SearchDropdown,
        query: query,
        isFocused: isFocused,
        searchResults: searchResults,
        onInput: onInput,
        onPokemonSelect: onPokemonSelect,
    }),
    emits: {},
});
export default (await import('vue')).defineComponent({
    emits: {},
});
; /* PartiallyEnd: #4569/main.vue */
