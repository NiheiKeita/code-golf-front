import { Meta, StoryObj } from '@storybook/react';
import { waitFor, within } from '@storybook/testing-library';
import { RankingView } from '.';


const meta: Meta<typeof RankingView> = {
  title: 'views/RankingView',
  component: RankingView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    id: "ddd",
  },
  play: async ({ canvasElement }) => {
    const camvas = within(canvasElement)
    await waitFor(async () => {
      camvas.getByText("RankingView")
    })
  },
}
