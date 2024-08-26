import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
const Input = React.forwardRef(({ invalid = false, className, ...props }, ref) => {
    return _jsx("input", { ref: ref, className: `input ${className} ${invalid ? 'input-invalid' : ''}`, ...props });
});
Input.displayName = 'Input';
export default Input;
