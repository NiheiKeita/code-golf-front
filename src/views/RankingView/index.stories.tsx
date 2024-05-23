import { Meta, StoryObj } from '@storybook/react';
import { RankingView } from '.';

const meta: Meta<typeof RankingView> = {
  title: 'views/RankingView',
  component: RankingView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "1",
  },
}
