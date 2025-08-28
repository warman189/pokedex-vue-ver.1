import SearchDropdownItem from './SearchDropdownItem.vue';
const __VLS_props = defineProps();
const __VLS_emit = defineEmits(['select']);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.ul, __VLS_elements.ul)({
    ...{ class: "search-dropdown" },
});
for (const [pokemon] of __VLS_getVForSourceType((__VLS_ctx.results))) {
    // @ts-ignore
    [results,];
    /** @type {[typeof SearchDropdownItem, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(SearchDropdownItem, new SearchDropdownItem({
        ...{ 'onSelect': {} },
        key: (pokemon.name),
        pokemon: (pokemon),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onSelect': {} },
        key: (pokemon.name),
        pokemon: (pokemon),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = ({ select: {} },
        { onSelect: (...[$event]) => {
                __VLS_ctx.$emit('select', pokemon);
                // @ts-ignore
                [$emit,];
            } });
    var __VLS_2;
}
/** @type {__VLS_StyleScopedClasses['search-dropdown']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        SearchDropdownItem: SearchDropdownItem,
    }),
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
