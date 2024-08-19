import React from 'react';
import Input, { InputProps } from './Input';

export type InputWithIconProps = InputProps & {
  icon: string;
  iconStyle: string;
  onClick: () => void;
};

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ icon, iconStyle, className, invalid, onClick }, ref) => {
    return (
      <div className="w-full flex gap-1">
        <Input className={className} invalid={invalid} ref={ref} />
        <img src={icon} className={iconStyle} onClick={onClick} />
      </div>
    );
  }
);

InputWithIcon.displayName = 'InputWithIcon';

export default InputWithIcon;
