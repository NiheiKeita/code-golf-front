import { Meta, StoryObj } from '@storybook/react';
import { SmallButton } from '.';


const meta: Meta<typeof SmallButton> = {
  title: 'components/SmallButton',
  component: SmallButton,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: "blue",
    text: "dddd",
    href: "dddd",
  },
  render(args) {
    return (
      <SmallButton {...args} />
    )
  },
}
