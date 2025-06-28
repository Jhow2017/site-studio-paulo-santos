import { CSSProperties, Ref } from 'react';
import { BreakpointProps } from '../../config';
import { StylesType } from './stylesType';

type ComponentType = {
    ref?: Ref<any>;
    forwardedRef?: Ref<any>;
    className?: string;
    id?: string;
    style?: CSSProperties;
    as?: string;
    _hover?: StylesType;
    _focus?: StylesType;
    _active?: StylesType;
    _before?: StylesType;
    _after?: StylesType;
    _css?: BreakpointProps<string>;
    css?: string;
} & StylesType;

export type { ComponentType };
