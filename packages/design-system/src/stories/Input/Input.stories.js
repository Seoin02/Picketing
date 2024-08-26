import Input from './Input';
const meta = {
    title: 'Input',
    component: Input,
    argTypes: {
        invalid: { control: 'boolean' },
        className: {
            control: 'text',
        },
    },
};
export default meta;
export const Default = {
    args: {
        invalid: false,
        className: 'w-120 h-8 border border-gold-50 p-1',
    },
};
export const Invalid = {
    args: {
        invalid: true,
        className: 'w-120 h-8 border border-red p-1',
    },
};
