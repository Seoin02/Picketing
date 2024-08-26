import { action } from '@storybook/addon-actions';
import InputWithIcon from './InputWithIcon';
const meta = {
    title: 'InputWithIcon',
    component: InputWithIcon,
    argTypes: {
        invalid: { control: 'boolean' },
        icon: { control: 'text' },
        iconStyle: { control: 'text' },
        className: { control: 'text' },
        onClick: { action: 'clicked' },
    },
};
export default meta;
export const Default = {
    args: {
        invalid: false,
        icon: 'search.svg',
        iconStyle: 'w-8 h-8 bg-gold-50 p-0.5',
        className: 'w-120 h-8 border border-gold-50 p-1',
        onClick: action('clicked'),
    },
};
