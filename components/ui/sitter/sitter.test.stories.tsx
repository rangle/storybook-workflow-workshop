import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { SitterProfile } from './sitter';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Interactive/Profile',
  component: SitterProfile,
  args: {
    fullName: "Jane Doe",
    location: "3 miles away",
    description: "I'm a part-time dog walker in the North York area. Let me know if you need someone to walk your dog!",
    editMode: true,
  },
};

type Story = StoryObj<typeof SitterProfile>;

export const SetProfileAvailable: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    // Click the button to set the profile to available
    await userEvent.click(canvas.getByTestId('availability-toggle'));
    await expect(canvas.getByTestId('availability-badge')).toHaveTextContent('Available');
    await expect(canvas.getByTestId('availability-badge')).toHaveClass('bg-green-50 text-green-700')
    await expect(canvas.getByTestId('availability-toggle')).toHaveTextContent('Off the Clock');
  },
};
