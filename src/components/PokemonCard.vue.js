import { ref, computed, watch } from 'vue';
import { getTypeColor } from '../utils/pokemonTypes';
import { fetchPokemonDetails } from '../services/pokemonService';
import placeholder from '../assets/char.png';
const props = defineProps();
const emit = defineEmits(['click', 'mouseenter', 'mouseleave']);
const detailedPokemon = ref(null);
const imageUrl = ref('');
const isLoading = ref(true);
const primaryType = computed(() => detailedPokemon.value?.types[0]?.type.name || null);
const fetchDetails = async () => {
    isLoading.value = true;
    try {
        const data = await fetchPokemonDetails(props.pokemon.url);
        detailedPokemon.value = data;
        imageUrl.value =
            data.sprites.other['official-artwork'].front_default || data.sprites.front_default || '';
        if (!imageUrl.value) {
            onImageError();
        }
    }
    catch (error) {
        console.error('Failed to fetch pokemon details for card:', error);
        onImageError();
    }
    finally {
        isLoading.value = false;
    }
};
watch(() => props.pokemon, fetchDetails, { immediate: true });
const onImageError = () => {
    imageUrl.value = placeholder;
};
const formattedId = computed(() => {
    return detailedPokemon.value ? `#${String(detailedPokemon.value.id).padStart(3, '0')}` : '';
});
const typeColor = computed(() => {
    if (!detailedPokemon.value)
        return '#CCC';
    const typeName = detailedPokemon.value.types[0]?.type.name || 'normal';
    return getTypeColor(typeName);
});
const capitalizedPokemonName = computed(() => {
    return props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1);
});
const onClick = () => {
    emit('click');
};
const onMouseEnter = () => {
    emit('mouseenter', primaryType.value);
};
const onMouseLeave = () => {
    emit('mouseleave', null);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['pokemon-card']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ onClick: (__VLS_ctx.onClick) },
    ...{ onMouseenter: (__VLS_ctx.onMouseEnter) },
    ...{ onMouseleave: (__VLS_ctx.onMouseLeave) },
    ...{ class: "pokemon-card" },
    ...{ style: ({ borderColor: __VLS_ctx.typeColor }) },
});
// @ts-ignore
[onClick, onMouseEnter, onMouseLeave, typeColor,];
if (__VLS_ctx.isLoading) {
    // @ts-ignore
    [isLoading,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "card-loading" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "spinner" },
    });
}
else if (__VLS_ctx.detailedPokemon) {
    // @ts-ignore
    [detailedPokemon,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "pokemon-id" },
        ...{ style: ({ color: __VLS_ctx.typeColor }) },
    });
    // @ts-ignore
    [typeColor,];
    (__VLS_ctx.formattedId);
    // @ts-ignore
    [formattedId,];
    __VLS_asFunctionalElement(__VLS_elements.img)({
        ...{ onError: (__VLS_ctx.onImageError) },
        src: (__VLS_ctx.imageUrl),
        alt: (__VLS_ctx.capitalizedPokemonName),
    });
    // @ts-ignore
    [onImageError, imageUrl, capitalizedPokemonName,];
    __VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
        ...{ class: "pokemon-name" },
        ...{ style: ({ backgroundColor: __VLS_ctx.typeColor }) },
    });
    // @ts-ignore
    [typeColor,];
    (__VLS_ctx.capitalizedPokemonName);
    // @ts-ignore
    [capitalizedPokemonName,];
}
/** @type {__VLS_StyleScopedClasses['pokemon-card']} */ ;
/** @type {__VLS_StyleScopedClasses['card-loading']} */ ;
/** @type {__VLS_StyleScopedClasses['spinner']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-id']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-name']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        detailedPokemon: detailedPokemon,
        imageUrl: imageUrl,
        isLoading: isLoading,
        onImageError: onImageError,
        formattedId: formattedId,
        typeColor: typeColor,
        capitalizedPokemonName: capitalizedPokemonName,
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
    }),
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
