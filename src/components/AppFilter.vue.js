import { ref } from 'vue';
import { vOnClickOutside } from '@vueuse/components';
import IconSortCircle from './icons/IconSortCircle.vue';
import IconFilterCheckbox from './icons/IconFilterCheckbox.vue';
const emit = defineEmits(['sort']);
const open = ref(false);
const current = ref('id-asc');
const options = [
    { value: 'id-asc', label: 'ID (Asc)' },
    { value: 'id-desc', label: 'ID (Desc)' },
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
];
const toggle = () => {
    open.value = !open.value;
};
const select = (value) => {
    current.value = value;
    emit('sort', value);
    open.value = false;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['menu-item']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "filter" },
});
__VLS_asFunctionalDirective(__VLS_directives.vOnClickOutside)(null, { ...__VLS_directiveBindingRestFields, value: (() => (__VLS_ctx.open = false)) }, null, null);
// @ts-ignore
[vOnClickOutside, open,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.toggle) },
    ...{ class: "sort-btn" },
    type: "button",
});
// @ts-ignore
[toggle,];
/** @type {[typeof IconSortCircle, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(IconSortCircle, new IconSortCircle({
    active: (__VLS_ctx.open),
}));
const __VLS_1 = __VLS_0({
    active: (__VLS_ctx.open),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
// @ts-ignore
[open,];
if (__VLS_ctx.open) {
    // @ts-ignore
    [open,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "menu" },
    });
    for (const [opt] of __VLS_getVForSourceType((__VLS_ctx.options))) {
        // @ts-ignore
        [options,];
        __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.open))
                        return;
                    __VLS_ctx.select(opt.value);
                    // @ts-ignore
                    [select,];
                } },
            key: (opt.value),
            ...{ class: "menu-item" },
            type: "button",
        });
        /** @type {[typeof IconFilterCheckbox, ]} */ ;
        // @ts-ignore
        const __VLS_4 = __VLS_asFunctionalComponent(IconFilterCheckbox, new IconFilterCheckbox({
            ...{ class: "check" },
            checked: (__VLS_ctx.current === opt.value),
        }));
        const __VLS_5 = __VLS_4({
            ...{ class: "check" },
            checked: (__VLS_ctx.current === opt.value),
        }, ...__VLS_functionalComponentArgsRest(__VLS_4));
        // @ts-ignore
        [current,];
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
        (opt.label);
    }
}
/** @type {__VLS_StyleScopedClasses['filter']} */ ;
/** @type {__VLS_StyleScopedClasses['sort-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['menu']} */ ;
/** @type {__VLS_StyleScopedClasses['menu-item']} */ ;
/** @type {__VLS_StyleScopedClasses['check']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        vOnClickOutside: vOnClickOutside,
        IconSortCircle: IconSortCircle,
        IconFilterCheckbox: IconFilterCheckbox,
        open: open,
        current: current,
        options: options,
        toggle: toggle,
        select: select,
    }),
    emits: {},
});
export default (await import('vue')).defineComponent({
    emits: {},
});
; /* PartiallyEnd: #4569/main.vue */
