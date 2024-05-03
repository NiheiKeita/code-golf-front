import { Meta, StoryObj } from '@storybook/react';
import { waitFor, within } from '@storybook/testing-library';
import { QuestionView } from '.';


const meta: Meta<typeof QuestionView> = {
  title: 'views/QuestionView',
  component: QuestionView,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

const question =
{
  id: 1,
  title: "question1",
  detail: "いわゆる「FizzBuzz」を実装してください。 1から100までの数字について、その数が3の倍数なら「Fizz」、5の倍数なら「Buzz」、15の倍数なら「FizzBuzz」、それ以外ならその数そのものを出力してください。それぞれの出力は改行で区切ってください。",
  exampleCode: 'for ($i = 1; $i <= 100; $i++) { \n   echo match([$i % 3 === 0, $i % 5 === 0]) {\n      [true, true] => "FizzBuzz",\n      [true, false] => "Fizz",\n      [false, true] => "Buzz",\n      [false, false] => $i,\n    }, PHP_EOL;\n}',
}

export const Test: Story = {
  args: {
    question: question,
  },
  play: async ({ canvasElement }) => {
    const camvas = within(canvasElement)
    await waitFor(async () => {
      camvas.getByText("QuestionView")
    })
  },
}
