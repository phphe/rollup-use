import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    initialCount: {
        type: NumberConstructor;
        default: number;
    };
    propB: {
        type: PropType<{
            a: number;
            b: string;
        }>;
    };
}, unknown, {
    count: number;
}, {}, {
    plus(): void;
    reduce(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    initialCount?: unknown;
    propB?: unknown;
} & {
    initialCount: number;
} & {
    propB?: {
        a: number;
        b: string;
    } | undefined;
}> & {}, {
    initialCount: number;
}>;
export default _default;
