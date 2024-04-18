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
    const camvas = within(canvasElement)
    await waitFor(async () => {
      camvas.getByText("カレンダー")
    })
    // await expect(camvas.queryByTestId('text')).toBeTruthy()
    // await expect(camvas.queryByTestId('text-no')).toBeFalsy()
    // await userEvent.type(await camvas.getByTestId('input'), 'input');
    // await fireEvent.click(camvas.getByTestId('buttonddd'))
    // await waitFor(() => expect(args.handleClick).toHaveBeenCalled())
  },
}
