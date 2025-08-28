const emit = defineEmits(['filter']);
const onFilterChange = (event) => {
    emit('filter', event.target.value);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "filter" },
});
__VLS_asFunctionalElement(__VLS_elements.select, __VLS_elements.select)({
    ...{ onChange: (__VLS_ctx.onFilterChange) },
});
// @ts-ignore
[onFilterChange,];
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "id-asc",
});
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "id-desc",
});
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "name-asc",
});
__VLS_asFunctionalElement(__VLS_elements.option, __VLS_elements.option)({
    value: "name-desc",
});
/** @type {__VLS_StyleScopedClasses['filter']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        onFilterChange: onFilterChange,
    }),
    emits: {},
});
export default (await import('vue')).defineComponent({
    emits: {},
});
; /* PartiallyEnd: #4569/main.vue */
