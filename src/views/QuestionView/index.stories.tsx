import { Meta, StoryObj } from '@storybook/react';
import { QuestionView } from '.';

const meta: Meta<typeof QuestionView> = {
  title: 'views/QuestionView',
  component: QuestionView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "1",
  },
}
