import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InputWithIcon, { InputWithIconProps } from './InputWithIcon';
import search from '../assets/white_search.svg';

const meta: Meta<typeof InputWithIcon> = {
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

type Story = StoryObj<InputWithIconProps>;

export const Default: Story = {
  args: {
    invalid: false,
    icon: search,
    iconStyle: 'w-8 h-8 bg-gold-50 p-0.5',
    className: 'w-120 h-8 border border-gold-50 p-1',
    onClick: action('clicked'),
  },
};
