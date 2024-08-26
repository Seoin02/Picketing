import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Input from './Input';
const InputWithIcon = React.forwardRef(({ icon, iconStyle, className, invalid, onClick }, ref) => {
    return (_jsxs("div", { className: "w-full flex gap-1", children: [_jsx(Input, { className: className, invalid: invalid, ref: ref }), _jsx("img", { src: icon, className: iconStyle, onClick: onClick, alt: "search icon" })] }));
});
InputWithIcon.displayName = 'InputWithIcon';
export default InputWithIcon;
