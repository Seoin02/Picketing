import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const Checkbox = ({ className, onClick, ...props }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheck = () => {
        setIsChecked(prev => !prev);
    };
    return (_jsxs("label", { className: "flex items-center cursor-pointer", children: [_jsx("input", { type: "checkbox", className: "hidden", onClick: handleCheck, "aria-hidden": "true", ...props }), _jsx("div", { className: className, children: isChecked ? (_jsx("div", { className: "w-4 h-4 bg-gold-50 border border-gold-50 rounded", children: _jsx("img", { src: "check.svg", className: "w-4 h-4", alt: "check icon" }) })) : ('') })] }));
};
export default Checkbox;
