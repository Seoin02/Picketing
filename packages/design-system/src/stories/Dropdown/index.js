import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Option from './Option';
import OptionList from './OptionList';
import Trigger from './Trigger';
import options from './test';
import useListOpen from './hooks/useListOpen';
const widthClass = {
    small: 'w-40',
};
const Dropdown = ({ title, width }) => {
    const { isClicked, handleClick } = useListOpen();
    return (_jsxs("div", { className: `${widthClass[width]}`, children: [_jsx(Trigger, { title: title, isClicked: isClicked, handleClick: handleClick }), isClicked ? (_jsx(OptionList, { children: options.map(option => (_jsx(Option, { optionTitle: option.title, optionLink: option.link }, option.id))) })) : ('')] }));
};
export default Dropdown;
