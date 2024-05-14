import { Meta, StoryObj } from '@storybook/react';
import { waitFor, within } from '@storybook/testing-library';
import { CodeSubmitView } from '.';


const meta: Meta<typeof CodeSubmitView> = {
  title: 'views/CodeSubmitView',
  component: CodeSubmitView,
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
      canvas.getByText("カレンダー")
    })
    // await expect(canvas.queryByTestId('text')).toBeTruthy()
    // await expect(canvas.queryByTestId('text-no')).toBeFalsy()
    // await userEvent.type(await canvas.getByTestId('input'), 'input');
    // await fireEvent.click(canvas.getByTestId('buttonddd'))
    // await waitFor(() => expect(args.handleClick).toHaveBeenCalled())
  },
}
