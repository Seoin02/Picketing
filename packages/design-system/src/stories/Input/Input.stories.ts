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
    className: 'w-120 h-8 border border-gold-50 p-1',
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    className: 'w-120 h-8 border border-red p-1',
  },
};
