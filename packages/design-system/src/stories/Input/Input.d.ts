import React from 'react';
export type InputProps = React.ComponentPropsWithRef<'input'> & {
    invalid: boolean;
};
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default Input;
