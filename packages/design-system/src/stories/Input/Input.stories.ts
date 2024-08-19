import type { Meta, StoryObj } from '@storybook/react';
import Input, { InputProps } from './Input';

const meta: Meta<typeof Input> = {
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

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    invalid: false,
    className: 'w-4 h-1 border border-gold-50',
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    className: 'w-4 h-1 border border-red',
  },
};
