import { action } from '@storybook/addon-actions';
import Checkbox from '.';
const meta = {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        className: { control: 'text' },
        onClick: { action: 'clicked' },
    },
};
export default meta;
export const Default = {
    args: {
        className: 'w-4 h-4 border border-gold-50 rounded flex items-center justify-center',
        onClick: action('clicked'),
    },
};
