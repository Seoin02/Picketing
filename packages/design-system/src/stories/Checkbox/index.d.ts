import React from 'react';
export type CheckboxProps = React.ComponentPropsWithoutRef<'input'> & {
    className: string;
    onClick: () => void;
};
declare const Checkbox: ({ className, onClick, ...props }: CheckboxProps) => import("react/jsx-runtime").JSX.Element;
export default Checkbox;
