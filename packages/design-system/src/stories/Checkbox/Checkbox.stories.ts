import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import Checkbox, { CheckboxProps } from '.';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    className: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  args: {
    className: 'w-4 h-4 border border-gold-50 rounded flex items-center justify-center',
    onClick: action('clicked'),
  },
};
