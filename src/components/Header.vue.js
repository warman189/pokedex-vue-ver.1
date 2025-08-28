import SearchBar from './SearchBar.vue';
import Filter from './Filter.vue';
const emit = defineEmits(['search', 'filter']);
const handleSearch = (query) => {
    emit('search', query);
};
const handleFilter = (filter) => {
    emit('filter', filter);
};
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({
    ...{ class: "header" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "logo-container" },
});
__VLS_asFunctionalElement(__VLS_elements.img)({
    src: "../assets/logo/Pokeball.png",
    alt: "Pokédex Logo",
    ...{ class: "logo" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "title" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "controls" },
});
/** @type {[typeof SearchBar, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(SearchBar, new SearchBar({
    ...{ 'onSearch': {} },
}));
const __VLS_1 = __VLS_0({
    ...{ 'onSearch': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
const __VLS_5 = ({ search: {} },
    { onSearch: (__VLS_ctx.handleSearch) });
// @ts-ignore
[handleSearch,];
var __VLS_2;
/** @type {[typeof Filter, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(Filter, new Filter({
    ...{ 'onFilter': {} },
}));
const __VLS_8 = __VLS_7({
    ...{ 'onFilter': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
let __VLS_10;
let __VLS_11;
const __VLS_12 = ({ filter: {} },
    { onFilter: (__VLS_ctx.handleFilter) });
// @ts-ignore
[handleFilter,];
var __VLS_9;
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.toggleTheme) },
});
// @ts-ignore
[toggleTheme,];
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-container']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['controls']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        SearchBar: SearchBar,
        Filter: Filter,
        handleSearch: handleSearch,
        handleFilter: handleFilter,
        toggleTheme: toggleTheme,
    }),
    emits: {},
});
export default (await import('vue')).defineComponent({
    emits: {},
});
; /* PartiallyEnd: #4569/main.vue */
