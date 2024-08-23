export type OptionProps = {
  optionTitle: string;
  optionLink: string;
  onClick?: () => void;
};

const Option = ({ optionTitle, optionLink, onClick }: OptionProps) => {
  return (
    <a href={optionLink}>
      <div className={`w-full h-25% text-xs items-center p-1 cursor-pointer text-black`} onClick={onClick}>
        {optionTitle}
      </div>
      <hr className="border-gold-50" />
    </a>
  );
};

export default Option;
