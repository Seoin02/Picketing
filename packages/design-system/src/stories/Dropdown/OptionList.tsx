import { ReactNode } from 'react';

type OptionListProps = {
  children: ReactNode;
};

const OptionList = ({ children }: OptionListProps) => {
  return <div className={`w-full h-full border border-gold-50`}>{children}</div>;
};

export default OptionList;
