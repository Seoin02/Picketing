import React from 'react';

export type InputProps = React.ComponentPropsWithRef<'input'> & {
  invalid: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ invalid = false, className, ...props }, ref) => {
  return <input {...props} ref={ref} className={className} />;
});

Input.displayName = 'Input';

export default Input;
