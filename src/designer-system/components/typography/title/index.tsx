import React from 'react';

//core
import ComponentBase, {
    ComponentBaseTypes,
} from '../../../core/component-base';
import { cn } from '../../../core/utils';

interface DsTitleTypes extends ComponentBaseTypes {
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
}

const DsTitle = ({
    children,
    className,
    as: Component = 'h1',
}: DsTitleTypes) => {
    return (
        <ComponentBase
            as={Component}
            className={cn('text-2xl font-bold', className)}
        >
            {children}
        </ComponentBase>
    );
};

export default DsTitle;
