import React from 'react';
import Input, { InputProps } from './Input';

type InputWithIconProps = InputProps & {
  icon: string;
};

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(({ icon }) => {
  return (
    <div>
      <Input invalid={false} />
      <img src={icon} />
    </div>
  );
});

InputWithIcon.displayName = 'InputWithIcon';

export default InputWithIcon;
