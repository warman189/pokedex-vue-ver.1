import { ref, onMounted, onBeforeUnmount } from 'vue';
import PokemonCard from './PokemonCard.vue';
import SkeletonCard from './SkeletonCard.vue';
const props = defineProps();
const emit = defineEmits(['select-pokemon', 'pokemon-hover', 'load-more']);
const handleSelectPokemon = (pokemon) => {
    emit('select-pokemon', pokemon);
};
const handlePokemonHover = (type) => {
    emit('pokemon-hover', type);
};
const sentinel = ref(null);
let observer = null;
onMounted(() => {
    observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
            if (props.hasMore && !props.isLoadingPage) {
                emit('load-more');
            }
        }
    }, { root: null, rootMargin: '0px 0px 300px 0px', threshold: 0 });
    if (sentinel.value)
        observer.observe(sentinel.value);
});
onBeforeUnmount(() => {
    if (observer && sentinel.value)
        observer.unobserve(sentinel.value);
    observer = null;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "pokemon-list" },
});
const __VLS_0 = {}.TransitionGroup;
/** @type {[typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, typeof __VLS_components.TransitionGroup, typeof __VLS_components.transitionGroup, ]} */ ;
// @ts-ignore
TransitionGroup;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "list",
    tag: "div",
    ...{ class: "grid" },
}));
const __VLS_2 = __VLS_1({
    name: "list",
    tag: "div",
    ...{ class: "grid" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
for (const [pokemon] of __VLS_getVForSourceType((__VLS_ctx.pokemons))) {
    // @ts-ignore
    [pokemons,];
    /** @type {[typeof PokemonCard, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(PokemonCard, new PokemonCard({
        ...{ 'onClick': {} },
        ...{ 'onMouseenter': {} },
        ...{ 'onMouseleave': {} },
        key: (pokemon.name),
        pokemon: (pokemon),
    }));
    const __VLS_6 = __VLS_5({
        ...{ 'onClick': {} },
        ...{ 'onMouseenter': {} },
        ...{ 'onMouseleave': {} },
        key: (pokemon.name),
        pokemon: (pokemon),
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    let __VLS_8;
    let __VLS_9;
    const __VLS_10 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.handleSelectPokemon(pokemon);
                // @ts-ignore
                [handleSelectPokemon,];
            } });
    const __VLS_11 = ({ mouseenter: {} },
        { onMouseenter: (__VLS_ctx.handlePokemonHover) });
    const __VLS_12 = ({ mouseleave: {} },
        { onMouseleave: (__VLS_ctx.handlePokemonHover) });
    // @ts-ignore
    [handlePokemonHover, handlePokemonHover,];
    var __VLS_7;
}
var __VLS_3;
if (__VLS_ctx.isLoadingPage) {
    // @ts-ignore
    [isLoadingPage,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "grid" },
    });
    for (const [i] of __VLS_getVForSourceType((__VLS_ctx.pageSize || 0))) {
        // @ts-ignore
        [pageSize,];
        /** @type {[typeof SkeletonCard, ]} */ ;
        // @ts-ignore
        const __VLS_14 = __VLS_asFunctionalComponent(SkeletonCard, new SkeletonCard({
            key: ('skeleton-' + i),
        }));
        const __VLS_15 = __VLS_14({
            key: ('skeleton-' + i),
        }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    }
}
__VLS_asFunctionalElement(__VLS_elements.div)({
    ref: "sentinel",
    ...{ class: "sentinel" },
});
/** @type {typeof __VLS_ctx.sentinel} */ ;
// @ts-ignore
[sentinel,];
/** @type {__VLS_StyleScopedClasses['pokemon-list']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['sentinel']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        PokemonCard: PokemonCard,
        SkeletonCard: SkeletonCard,
        handleSelectPokemon: handleSelectPokemon,
        handlePokemonHover: handlePokemonHover,
        sentinel: sentinel,
    }),
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
