export type OptionProps = {
    optionTitle: string;
    optionLink: string;
    onClick?: () => void;
};
declare const Option: ({ optionTitle, optionLink, onClick }: OptionProps) => import("react/jsx-runtime").JSX.Element;
export default Option;
