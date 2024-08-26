import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Option = ({ optionTitle, optionLink, onClick }) => {
    return (_jsxs("a", { href: optionLink, children: [_jsx("div", { className: `w-full h-25% text-xs items-center p-1 cursor-pointer text-black`, onClick: onClick, children: optionTitle }), _jsx("hr", { className: "border-gold-50" })] }));
};
export default Option;
