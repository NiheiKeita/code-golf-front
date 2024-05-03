import { Meta, StoryObj } from '@storybook/react';
import { waitFor, within } from '@storybook/testing-library';
import { SectionFrame } from '.';


const meta: Meta<typeof SectionFrame> = {
  title: 'components/SectionFrame',
  component: SectionFrame,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    title: "dddd",
  },
  render(args) {
    return (
      <SectionFrame {...args}>
        {'ユニコーンガンダム\nクスィーガンダム\nガンダムF91\nクロスボーンガンダムX1'}
      </SectionFrame>
    )
  },
  play: async ({ canvasElement }) => {
    const camvas = within(canvasElement)
    await waitFor(async () => {
      camvas.getByText("QuestionView")
    })
  },
}
