import React from 'react';
import { InputProps } from './Input';
export type InputWithIconProps = InputProps & {
    icon: string;
    iconStyle: string;
    onClick: () => void;
};
declare const InputWithIcon: React.ForwardRefExoticComponent<Omit<InputWithIconProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default InputWithIcon;
