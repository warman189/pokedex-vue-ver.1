import { ref, computed, watch, onMounted } from 'vue';
import { fetchPokemonDetails } from '../services/pokemonService';
import { getTypeColor } from '../utils/pokemonTypes';
const props = defineProps();
const __VLS_emit = defineEmits(['select']);
const detailedPokemon = ref(null);
const fetchDetails = async () => {
    try {
        detailedPokemon.value = await fetchPokemonDetails(props.pokemon.url);
    }
    catch (error) {
        console.error('Failed to fetch details for dropdown item:', error);
    }
};
onMounted(fetchDetails);
watch(() => props.pokemon, fetchDetails);
const animatedSprite = computed(() => {
    return (detailedPokemon.value?.sprites?.versions?.['generation-v']?.['black-white']?.animated
        ?.front_default ||
        detailedPokemon.value?.sprites?.front_default ||
        '');
});
const typeColor = computed(() => {
    if (!detailedPokemon.value)
        return 'inherit';
    const typeName = detailedPokemon.value.types[0]?.type.name || 'normal';
    return getTypeColor(typeName);
});
const capitalizedPokemonName = computed(() => {
    return props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.li, __VLS_elements.li)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('select');
            // @ts-ignore
            [$emit,];
        } },
    ...{ class: "dropdown-item" },
});
if (__VLS_ctx.detailedPokemon) {
    // @ts-ignore
    [detailedPokemon,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "item-content" },
    });
    __VLS_asFunctionalElement(__VLS_elements.img)({
        src: (__VLS_ctx.animatedSprite),
        alt: (__VLS_ctx.pokemon.name),
        ...{ class: "pokemon-sprite" },
    });
    // @ts-ignore
    [animatedSprite, pokemon,];
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "pokemon-name" },
        ...{ style: ({ color: __VLS_ctx.typeColor }) },
    });
    // @ts-ignore
    [typeColor,];
    (__VLS_ctx.capitalizedPokemonName);
    // @ts-ignore
    [capitalizedPokemonName,];
}
else {
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "item-loading" },
    });
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
}
/** @type {__VLS_StyleScopedClasses['dropdown-item']} */ ;
/** @type {__VLS_StyleScopedClasses['item-content']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-sprite']} */ ;
/** @type {__VLS_StyleScopedClasses['pokemon-name']} */ ;
/** @type {__VLS_StyleScopedClasses['item-loading']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        detailedPokemon: detailedPokemon,
        animatedSprite: animatedSprite,
        typeColor: typeColor,
        capitalizedPokemonName: capitalizedPokemonName,
    }),
    emits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
