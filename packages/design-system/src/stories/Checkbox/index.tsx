import React, { useState } from 'react';
import check from '../assets/check_white.svg';

export type CheckboxProps = React.ComponentPropsWithoutRef<'input'> & {
  className: string;
  onClick: () => void;
};

const Checkbox = ({ className, onClick, ...props }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <input type="checkbox" className="hidden" onClick={handleCheck} aria-hidden="true" {...props} />
      <div className={className}>{isChecked ? <img src={check} className="w-4 h-4" alt="check icon" /> : ''}</div>
    </label>
  );
};

export default Checkbox;
