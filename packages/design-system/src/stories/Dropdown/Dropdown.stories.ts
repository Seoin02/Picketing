import type { Meta, StoryObj } from '@storybook/react';
import Dropdown, { DropdownProps } from '.';

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    title: { control: 'text' },
    width: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<DropdownProps>;

export const Default: Story = {
  args: {
    title: '다른 사이트의 서버 시간',
    width: 'small',
  },
};
