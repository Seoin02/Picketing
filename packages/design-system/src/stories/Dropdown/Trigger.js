import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Trigger = ({ title, isClicked, handleClick }) => {
    return (_jsxs("div", { className: `w-full h-6 border-2 border-gold-50 flex items-center p-1 justify-between`, children: [_jsx("p", { className: "text-xs font-bold", children: title }), _jsx("p", { className: "text-gold-50 text-lg cursor-pointer", onClick: handleClick, children: isClicked ? '▲' : '▼' })] }));
};
export default Trigger;
