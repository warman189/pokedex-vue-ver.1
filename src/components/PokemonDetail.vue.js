import { computed, defineProps, ref, watch } from 'vue';
import { getTypeColor } from '../utils/pokemonTypes';
import { defineEmits } from 'vue';
import placeholder from '../assets/char.png';
import { statNameMapping } from '../utils/stats';
import IconArrowLeft from './icons/IconArrowLeft.vue';
import IconWeight from './icons/IconWeight.vue';
import IconHeight from './icons/IconHeight.vue';
const props = defineProps();
const imageUrl = ref('');
watch(() => props.pokemon, (newPokemon) => {
    if (newPokemon) {
        imageUrl.value =
            newPokemon.sprites.other['official-artwork'].front_default ||
                newPokemon.sprites.front_default ||
                '';
    }
}, { immediate: true });
const onImageError = () => {
    imageUrl.value = placeholder;
};
const emit = defineEmits(['close', 'prev', 'next']);
const typeColor = computed(() => {
    if (!props.pokemon)
        return '#CCC';
    const typeName = props.pokemon.types[0]?.type.name || 'normal';
    return getTypeColor(typeName);
});
const formattedId = computed(() => {
    return props.pokemon ? `#${String(props.pokemon.id).padStart(3, '0')}` : '';
});
const capitalizedPokemonName = computed(() => {
    return props.pokemon ? capitalize(props.pokemon.name) : '';
});
const getStatName = (name) => {
    return statNameMapping[name] || name.substring(0, 3).toUpperCase();
};
const capitalize = (text) => {
    if (!text)
        return '';
    return text.charAt(0).toUpperCase() + text.slice(1);
};
const close = () => emit('close');
const prev = () => emit('prev');
const next = () => emit('next');
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['back-button']} */ ;
/** @type {__VLS_StyleScopedClasses['measurement-value']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-name-header']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-detail-card']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-name-header']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-id-header']} */ ;
// CSS variable injection 
// CSS variable injection end 
if (__VLS_ctx.pokemon) {
    // @ts-ignore
    [pokemon,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ onClick: (__VLS_ctx.close) },
        ...{ class: "pokemon-detail-overlay" },
    });
    // @ts-ignore
    [close,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "pokemon-detail-card" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "pokemon-detail-header" },
        ...{ style: ({ backgroundColor: __VLS_ctx.typeColor }) },
    });
    // @ts-ignore
    [typeColor,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "header-top" },
    });
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (__VLS_ctx.close) },
        ...{ class: "back-button" },
    });
    // @ts-ignore
    [close,];
    /** @type {[typeof IconArrowLeft, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(IconArrowLeft, new IconArrowLeft({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
        ...{ class: "pokemon-name-header" },
    });
    (__VLS_ctx.capitalizedPokemonName);
    // @ts-ignore
    [capitalizedPokemonName,];
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "pokemon-id-header" },
    });
    (__VLS_ctx.formattedId);
    // @ts-ignore
    [formattedId,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "pokemon-pokeball-img" },
    });
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: "../assets/Pokeball.png",
        alt: "Pokéball",
        ...{ class: "pokeball" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "pokemon-image-container" },
    });
    __VLS_asFunctionalElement(__VLS_elements.img)({
        ...{ onError: (__VLS_ctx.onImageError) },
        src: (__VLS_ctx.imageUrl),
        alt: (__VLS_ctx.pokemon.name),
        ...{ class: "pokemon-image-large" },
    });
    // @ts-ignore
    [pokemon, onImageError, imageUrl,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "pokemon-detail-body" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "pokemon-types" },
    });
    for (const [typeInfo] of __VLS_getVForSourceType((__VLS_ctx.pokemon.types))) {
        // @ts-ignore
        [pokemon,];
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            key: (typeInfo.type.name),
            ...{ class: "type-badge" },
            ...{ style: ({ backgroundColor: __VLS_ctx.getTypeColor(typeInfo.type.name) }) },
        });
        // @ts-ignore
        [getTypeColor,];
        (__VLS_ctx.capitalize(typeInfo.type.name));
        // @ts-ignore
        [capitalize,];
    }
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "about-title" },
        ...{ style: ({ color: __VLS_ctx.typeColor }) },
    });
    // @ts-ignore
    [typeColor,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "pokemon-measurements" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "measurement-item" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "measurement-value" },
    });
    /** @type {[typeof IconWeight, ]} */ ;
    // @ts-ignore
    const __VLS_4 = __VLS_asFunctionalComponent(IconWeight, new IconWeight({}));
    const __VLS_5 = __VLS_4({}, ...__VLS_functionalComponentArgsRest(__VLS_4));
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
    (__VLS_ctx.pokemon.weight / 10);
    // @ts-ignore
    [pokemon,];
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "measurement-label" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "measurement-divider" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "measurement-item" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "measurement-value" },
    });
    /** @type {[typeof IconHeight, ]} */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(IconHeight, new IconHeight({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
    (__VLS_ctx.pokemon.height / 10);
    // @ts-ignore
    [pokemon,];
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "measurement-label" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "measurement-divider" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "measurement-item" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "measurement-value moves" },
    });
    if (__VLS_ctx.pokemon.moves.length > 0) {
        // @ts-ignore
        [pokemon,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
        (__VLS_ctx.capitalize(__VLS_ctx.pokemon.moves[0].move.name));
        // @ts-ignore
        [pokemon, capitalize,];
    }
    if (__VLS_ctx.pokemon.moves.length > 1) {
        // @ts-ignore
        [pokemon,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
        (__VLS_ctx.capitalize(__VLS_ctx.pokemon.moves[1].move.name));
        // @ts-ignore
        [pokemon, capitalize,];
    }
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "measurement-label" },
    });
    __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
        ...{ class: "pokemon-description" },
    });
    (__VLS_ctx.pokemon.description);
    // @ts-ignore
    [pokemon,];
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "stats-title" },
        ...{ style: ({ color: __VLS_ctx.typeColor }) },
    });
    // @ts-ignore
    [typeColor,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "stats-container" },
        key: (__VLS_ctx.pokemon.id),
    });
    // @ts-ignore
    [pokemon,];
    for (const [stat] of __VLS_getVForSourceType((__VLS_ctx.pokemon.stats))) {
        // @ts-ignore
        [pokemon,];
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            key: (stat.stat.name),
            ...{ class: "stat" },
        });
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            ...{ class: "stat-name" },
            ...{ style: ({ color: __VLS_ctx.typeColor }) },
        });
        // @ts-ignore
        [typeColor,];
        (__VLS_ctx.getStatName(stat.stat.name));
        // @ts-ignore
        [getStatName,];
        __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
            ...{ class: "stat-value" },
        });
        (String(stat.base_stat).padStart(3, '0'));
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "progress-bar" },
        });
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "progress" },
            ...{ style: ({ width: `${(stat.base_stat / 255) * 100}%`, backgroundColor: __VLS_ctx.typeColor }) },
        });
        // @ts-ignore
        [typeColor,];
    }
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ onClick: (__VLS_ctx.prev) },
        ...{ class: "nav-arrow left" },
    });
    // @ts-ignore
    [prev,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ onClick: (__VLS_ctx.next) },
        ...{ class: "nav-arrow right" },
    });
    // @ts-ignore
    [next,];
}
/** @type {__VLS_StyleScopedClasses['pokemon-detail-overlay']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-detail-card']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-detail-header']} */ ;
/** @type {__VLS_StyleScopedClasses['header-top']} */ ;
/** @type {__VLS_StyleScopedClasses['back-button']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-name-header']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-id-header']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-pokeball-img']} */ ;
/** @type {__VLS_StyleScopedClasses['pokeball']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-image-container']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-image-large']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-detail-body']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-types']} */ ;
/** @type {__VLS_StyleScopedClasses['type-badge']} */ ;
/** @type {__VLS_StyleScopedClasses['about-title']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-measurements']} */ ;
/** @type {__VLS_StyleScopedClasses['measurement-item']} */ ;
/** @type {__VLS_StyleScopedClasses['measurement-value']} */ ;
/** @type {__VLS_StyleScopedClasses['measurement-label']} */ ;
/** @type {__VLS_StyleScopedClasses['measurement-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['measurement-item']} */ ;
/** @type {__VLS_StyleScopedClasses['measurement-value']} */ ;
/** @type {__VLS_StyleScopedClasses['measurement-label']} */ ;
/** @type {__VLS_StyleScopedClasses['measurement-divider']} */ ;
/** @type {__VLS_StyleScopedClasses['measurement-item']} */ ;
/** @type {__VLS_StyleScopedClasses['measurement-value']} */ ;
/** @type {__VLS_StyleScopedClasses['moves']} */ ;
/** @type {__VLS_StyleScopedClasses['measurement-label']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-description']} */ ;
/** @type {__VLS_StyleScopedClasses['stats-title']} */ ;
/** @type {__VLS_StyleScopedClasses['stats-container']} */ ;
/** @type {__VLS_StyleScopedClasses['stat']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-name']} */ ;
/** @type {__VLS_StyleScopedClasses['stat-value']} */ ;
/** @type {__VLS_StyleScopedClasses['progress-bar']} */ ;
/** @type {__VLS_StyleScopedClasses['progress']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['nav-arrow']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        getTypeColor: getTypeColor,
        IconArrowLeft: IconArrowLeft,
        IconWeight: IconWeight,
        IconHeight: IconHeight,
        imageUrl: imageUrl,
        onImageError: onImageError,
        typeColor: typeColor,
        formattedId: formattedId,
        capitalizedPokemonName: capitalizedPokemonName,
        getStatName: getStatName,
        capitalize: capitalize,
        close: close,
        prev: prev,
        next: next,
    }),
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
