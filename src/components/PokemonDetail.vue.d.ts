import type { Pokemon } from '../types';
type __VLS_Props = {
    pokemon: Pokemon | null;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    prev: (...args: any[]) => void;
    next: (...args: any[]) => void;
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onPrev?: ((...args: any[]) => any) | undefined;
    onNext?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
