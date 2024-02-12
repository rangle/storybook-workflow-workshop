import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import { SkeletonCard } from './skeleton';

export default {
  title: 'Components/SkeletonCard',
  component: SkeletonCard,
  parameters: {
    layout: 'centered',
    // https://storybookjs.github.io/addon-designs/?path=/story/docs-quick-start--page
    design: {
        type: "figma",
        url: "", // Url to the component's figma file/frame/prototype.
      },
    },
  tags: ['autodocs'],
};

type Story = StoryObj<typeof SkeletonCard>;

export const Primary: Story = {};

export const MultipleSkeletons: Story = {
  render: () => (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  ),
};

// https://storybook.js.org/docs/react/essentials/viewport
export const PrimaryOnMobileViewport: Story = {
  ...Primary,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  },
  render: () => (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  ),
};