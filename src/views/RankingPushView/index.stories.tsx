import { Meta, StoryObj } from '@storybook/react';
import { waitFor, within } from '@storybook/testing-library';
import { RankingPushView } from '.';


const meta: Meta<typeof RankingPushView> = {
  title: 'views/RankingPushView',
  component: RankingPushView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    id: "ddd",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await waitFor(async () => {
      canvas.getByText("RankingPushView")
    })
  },
}
