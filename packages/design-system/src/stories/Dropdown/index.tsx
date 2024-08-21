import React from 'react';
import Option from './Option';
import OptionList from './OptionList';
import Trigger from './Trigger';
import options from './test';
import useListOpen from './hooks/useListOpen';

export type DropdownProps = {
  width: 'small';
  title: string;
};

const widthClass = {
  small: 'w-40',
};

const Dropdown = ({ title, width }: DropdownProps) => {
  const { isClicked, handleClick } = useListOpen();

  return (
    <div className={`${widthClass[width]}`}>
      <Trigger title={title} isClicked={isClicked} handleClick={handleClick} />
      {isClicked ? (
        <OptionList>
          {options.map(option => (
            <Option key={option.id} optionTitle={option.title} optionLink={option.link} />
          ))}
        </OptionList>
      ) : (
        ''
      )}
    </div>
  );
};

export default Dropdown;
