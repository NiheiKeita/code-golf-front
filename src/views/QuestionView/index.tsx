
import { SectionFrame } from '@/components/SectionFrame'
import { TextArea } from '@/components/TextArea'
import { Question } from "@/types/Question"
import React from "react"
import { useQuestionView } from './hooks'
import { SmallButton } from '@/components/SmallButton'

//TODO:APIから取ってくるか、前の画面から撮ってくる
const question: Question = {
  id: 1,
  title: "question1",
  detail: "いわゆる「FizzBuzz」を実装してください。 1から100までの数字について、その数が3の倍数なら「Fizz」、5の倍数なら「Buzz」、15の倍数なら「FizzBuzz」、それ以外ならその数そのものを出力してください。それぞれの出力は改行で区切ってください。",
  exampleCode: 'for ($i = 1; $i <= 100; $i++) { \n   echo match([$i % 3 === 0, $i % 5 === 0]) {\n      [true, true] => "FizzBuzz",\n      [true, false] => "Fizz",\n      [false, true] => "Buzz",\n      [false, false] => $i,\n    }, PHP_EOL;\n}',
}

export const QuestionView = React.memo(function QuestionView() {
  const { value, handleChange } = useQuestionView()
  return (
    <>
      <div className='mt-5'>
        <SectionFrame title={question.title}>
          {question.detail}
        </SectionFrame>
        <SectionFrame title="実装例" className="mt-2">
          {question.exampleCode}
        </SectionFrame>
        <SectionFrame title="回答" className="mt-2">
          <TextArea handleChange={handleChange} value={value} />
          <div className='mt-3'>
            <SmallButton text="回答を送信する" href={''} variant="blue" />
          </div>
        </SectionFrame>
      </div>
      <div className='mt-5'>
        <SmallButton text="戻る" href={''} variant="black" />
      </div>
    </>
  )
})
