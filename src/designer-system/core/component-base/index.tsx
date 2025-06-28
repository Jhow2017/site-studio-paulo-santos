import React, { ElementType } from 'react';

//types
import type { StylesType } from '../types/stylesType';

export interface ComponentBaseTypes extends StylesType {
    children: React.ReactNode;
    className?: string;
    as?: ElementType;
}

const ComponentBase = ({
    children,
    className,
    as: Component = 'div',
}: ComponentBaseTypes) => {
    return <Component className={className}>{children}</Component>;
};

export default ComponentBase;
