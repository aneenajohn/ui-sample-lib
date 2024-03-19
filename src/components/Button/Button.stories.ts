import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'PandaUI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Click me!',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Click me!',
  },
};

export const DisabledBtn: Story = {
  args: {
    variant: 'primary',
    children: 'Click me!',
    disabled: true,
  },
};

export const BtnWithClickHandler: Story = {
  args: {
    variant: 'secondary',
    children: 'Click me!',
    onClick: () => alert('summa summa la nonda kudathu bro!'),
  },
};
