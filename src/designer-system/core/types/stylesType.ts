import { CSSProperties } from 'react';
import { BreakpointProps } from '../../config';
import { Color, FontFamily, FontWeight } from './cssValueTypes';

// Mapeamento de propriedades para suas abreviações
export const abbreviationsMap = {
    margin: 'm',
    marginTop: 'mt',
    marginRight: 'mr',
    marginBottom: 'mb',
    marginLeft: 'ml',
    padding: 'p',
    paddingTop: 'pt',
    paddingRight: 'pr',
    paddingBottom: 'pb',
    paddingLeft: 'pl',
    backgroundColor: 'bgColor',
    background: 'bg',
    backgroundImage: 'bgImage',
    backgroundSize: 'bgSize',
    backgroundPosition: 'bgPosition',
    backgroundRepeat: 'bgRepeat',
    backgroundAttachment: 'bgAttachment',
    width: 'w',
    minWidth: 'minW',
    maxWidth: 'maxW',
    height: 'h',
    minHeight: 'minH',
    maxHeight: 'maxH',
} as const;

// Tipagem de propriedades selecionadas
type SelectedProperties = keyof typeof abbreviationsMap;

// Tipo padrão para propriedades CSS sem prefixos como 'Moz' e 'Webkit'
type CSSPropertiesStandard = Omit<
    CSSProperties,
    `${'Moz' | 'Webkit' | 'ms'}${string}` | 'var' | 'scrollBehavior' | 'color'
>;

// Tipo que combina as propriedades padrão e abreviadas
type StylesType = {
    [K in keyof CSSPropertiesStandard]?:
    | CSSPropertiesStandard[K] // Mantém os tipos originais das propriedades
    | BreakpointProps<CSSPropertiesStandard[K]>; // valor para breakpoints
} & {
    [K in SelectedProperties as K | typeof abbreviationsMap[K]]?: string | BreakpointProps<string>;
};

// Define a propriedade 'color' separadamente
type ExtendedStylesType = StylesType & {
    content?: string
    color?: Color | BreakpointProps<Color>;
    backgroundColor?: Color | BreakpointProps<Color>;
    fontFamily?: FontFamily | BreakpointProps<FontFamily>;
    fontWeight?: FontWeight | BreakpointProps<FontWeight>;
};

export type { ExtendedStylesType as StylesType };
