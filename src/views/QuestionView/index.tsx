"use client"

import { SectionFrame } from '@/components/SectionFrame'
import { TextArea } from '@/components/TextArea'
import { Question } from "@/types/Question"
import React from "react"
import { useQuestionView } from './hooks'
import { SmallButton } from '@/components/SmallButton'
import { usePostCodeCheckAPI } from '../QuestionListView/api/usePostCodeCheck'

type Props = {
  id: string,
}
//TODO:APIから取ってくるか、前の画面から撮ってくる
const question1: Question = {
  id: 1,
  title: "question1",
  detail: "いわゆる「FizzBuzz」を実装してください。 1から100までの数字について、その数が3の倍数なら「Fizz」、5の倍数なら「Buzz」、15の倍数なら「FizzBuzz」、それ以外ならその数そのものを出力してください。それぞれの出力は改行で区切ってください。",
  exampleCode: 'for ($i = 1; $i <= 100; $i++) { \n   echo match([$i % 3 === 0, $i % 5 === 0]) {\n      [true, true] => "FizzBuzz",\n      [true, false] => "Fizz",\n      [false, true] => "Buzz",\n      [false, false] => $i,\n    }, PHP_EOL;\n}',
}
const question2: Question = {
  id: 2,
  title: "question2",
  detail: "RFC 4648 で定義された Base32 エンコーディングを実装してください。 標準入力から与えられる各行に対し、Base32 エンコードをおこなった文字列を標準出力へ改行区切りで出力してください。 なお、アルファベットの出力には大文字を用いてください。",
  exampleCode: 'question2の例のコード',
}
export const QuestionView = React.memo<Props>(function QuestionView({
  id,
}) {
  const { value, handleChange } = useQuestionView()
  const { isLoading, postCodeCheck, resultData } = usePostCodeCheckAPI()

  const question = (() => {
    switch (id) {
      case "1":
        return question1
      case "2":
        return question2
      default:
        return null
    }
  })()
  const submitCode = () => {
    const postData = {
      "code": value,
    }
    postCodeCheck(postData)
  }

  //Questionがなかったら一覧画面に返す
  if (!question) {
    return <></>
  }
  return (
    <>
      <div className='mt-5 '>
        <SectionFrame title={question.title}>
          {question.detail}
        </SectionFrame>
        <SectionFrame title="実装例" className="mt-2">
          {question.exampleCode}
        </SectionFrame>
        <SectionFrame title="回答" className="mt-2">
          <TextArea handleChange={handleChange} value={value} />
          {
            resultData?.result === "ok" &&
            (
              <div className="rounded-md bg-green-200 p-4 shadow-md">
                <p className="text-lg font-semibold text-green-800">正解！バイト数は{resultData?.byte}バイトでした！</p>
              </div>

            )
          }
          {
            resultData?.result === "ng" &&
            (
              <div className="rounded-md bg-red-100 p-4 shadow-md">
                <div className="mb-2 font-semibold text-red-800">出力結果が正しくありません。</div>
                <div className="flex items-center">
                  <div className="mr-2 text-gray-700">出力結果</div>
                  <div className="text-gray-900">{resultData?.response}</div>
                </div>
              </div>
            )
          }
          {
            resultData?.result === "error" && (
              <div className="rounded-md bg-yellow-100 p-4 shadow-md">
                <div className="mb-2 font-semibold text-yellow-800">コードが間違っています。</div>
                <div className="flex items-center">
                  <div className="mr-2 text-gray-700">エラーコード</div>
                  <div className="text-gray-900">{resultData?.error}</div>
                </div>
              </div>
            )
          }
          <div className='mt-3'>
            <SmallButton text="回答を送信する" handleClick={submitCode} variant="blue" disable={isLoading} />
          </div>
        </SectionFrame>
      </div>
      <div className='m-5'>
        <SmallButton text="戻る" handleClick={() => console.log('/questions')} variant="black" />
      </div>
    </>
  )
})
