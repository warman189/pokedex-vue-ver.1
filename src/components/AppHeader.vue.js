import AppSearchBar from './AppSearchBar.vue';
import AppFilter from './AppFilter.vue';
import { defineEmits } from 'vue';
import { vibrate } from '../utils/haptics';
const emit = defineEmits(['search', 'sort', 'select-pokemon', 'home']);
const handleSearch = (query) => {
    emit('search', query);
};
const handleSort = (filter) => {
    emit('sort', filter);
};
const handleSelectFromSearch = (pokemon) => {
    emit('select-pokemon', pokemon);
};
const goHome = () => {
    vibrate(10);
    emit('home');
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['logo-button']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['controls']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.header, __VLS_elements.header)({
    ...{ class: "header" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "logo-container" },
});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.goHome) },
    ...{ class: "logo-button" },
    type: "button",
});
// @ts-ignore
[goHome,];
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
/** @type {[typeof AppSearchBar, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(AppSearchBar, new AppSearchBar({
    ...{ 'onSearch': {} },
    ...{ 'onSelectPokemon': {} },
}));
const __VLS_1 = __VLS_0({
    ...{ 'onSearch': {} },
    ...{ 'onSelectPokemon': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
const __VLS_5 = ({ search: {} },
    { onSearch: (__VLS_ctx.handleSearch) });
const __VLS_6 = ({ selectPokemon: {} },
    { onSelectPokemon: (__VLS_ctx.handleSelectFromSearch) });
// @ts-ignore
[handleSearch, handleSelectFromSearch,];
var __VLS_2;
/** @type {[typeof AppFilter, ]} */ ;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent(AppFilter, new AppFilter({
    ...{ 'onSort': {} },
}));
const __VLS_9 = __VLS_8({
    ...{ 'onSort': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_11;
let __VLS_12;
const __VLS_13 = ({ sort: {} },
    { onSort: (__VLS_ctx.handleSort) });
// @ts-ignore
[handleSort,];
var __VLS_10;
/** @type {__VLS_StyleScopedClasses['header']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-container']} */ ;
/** @type {__VLS_StyleScopedClasses['logo-button']} */ ;
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
/** @type {__VLS_StyleScopedClasses['title']} */ ;
/** @type {__VLS_StyleScopedClasses['controls']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        AppSearchBar: AppSearchBar,
        AppFilter: AppFilter,
        handleSearch: handleSearch,
        handleSort: handleSort,
        handleSelectFromSearch: handleSelectFromSearch,
        goHome: goHome,
    }),
    emits: {},
});
export default (await import('vue')).defineComponent({
    emits: {},
});
; /* PartiallyEnd: #4569/main.vue */
