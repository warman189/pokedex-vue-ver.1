import { ref, onMounted, onBeforeUnmount } from 'vue';
import IconArrowUp from './icons/IconArrowUp.vue';
import IconArrowDown from './icons/IconArrowDown.vue';
import { vibrate } from '../utils/haptics';
const isVisible = ref(false);
const shouldScrollUp = ref(true);
const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const nearTop = y < 200;
    isVisible.value = y > 300 || max - y > 300;
    // On mobile we show one button: at top -> show Down, otherwise show Up
    shouldScrollUp.value = !nearTop;
};
const scrollToTop = () => {
    vibrate(12);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
const scrollToBottom = () => {
    vibrate(12);
    const max = document.documentElement.scrollHeight;
    window.scrollTo({ top: max, behavior: 'smooth' });
};
onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['scroll-buttons']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['scroll-buttons']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "scroll-buttons" },
    ...{ class: ({ visible: __VLS_ctx.isVisible }) },
});
// @ts-ignore
[isVisible,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.shouldScrollUp ? __VLS_ctx.scrollToTop() : __VLS_ctx.scrollToBottom();
            // @ts-ignore
            [shouldScrollUp, scrollToTop, scrollToBottom,];
        } },
    ...{ class: "btn" },
    'aria-label': (__VLS_ctx.shouldScrollUp ? 'Scroll to top' : 'Scroll to bottom'),
    title: (__VLS_ctx.shouldScrollUp ? 'Up' : 'Down'),
});
// @ts-ignore
[shouldScrollUp, shouldScrollUp,];
const __VLS_0 = ((__VLS_ctx.shouldScrollUp ? __VLS_ctx.IconArrowUp : __VLS_ctx.IconArrowDown));
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
// @ts-ignore
[shouldScrollUp, IconArrowUp, IconArrowDown,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.scrollToBottom) },
    ...{ class: "btn" },
    'aria-label': "Scroll to bottom",
    title: "Down",
});
// @ts-ignore
[scrollToBottom,];
/** @type {[typeof IconArrowDown, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(IconArrowDown, new IconArrowDown({}));
const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
/** @type {__VLS_StyleScopedClasses['scroll-buttons']} */ ;
/** @type {__VLS_StyleScopedClasses['visible']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
/** @type {__VLS_StyleScopedClasses['btn']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        IconArrowUp: IconArrowUp,
        IconArrowDown: IconArrowDown,
        isVisible: isVisible,
        shouldScrollUp: shouldScrollUp,
        scrollToTop: scrollToTop,
        scrollToBottom: scrollToBottom,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
