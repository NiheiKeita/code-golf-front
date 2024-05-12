"use client"

import { SectionFrame } from '@/components/SectionFrame'
import { TextArea } from '@/components/TextArea'
import React, { useEffect } from "react"
import { useQuestionView } from './hooks'
import { LoadingView } from '@/components/LoadingView'
import { SmallButton } from '@/components/SmallButton'

type Props = {
  id: string,
}
export const QuestionView = React.memo<Props>(function QuestionView({
  id,
}) {
  const { value, handleChange, submitCode, transition, question, getQuestion, isLoading, usePostCodeCheck } = useQuestionView()
  useEffect(() => {
    getQuestion(id)
  }, [getQuestion, id])


  //Questionがなかったら一覧画面に返す
  if (isLoading) {
    return <LoadingView variant='blue' />
  }
  if (!question) {
    return <LoadingView variant='blue' />
  }
  return (
    <>
      <div className='mt-5 '>
        <SectionFrame title={question.title}>
          {question.detail}
        </SectionFrame>
        <SectionFrame title="実装例" className="mt-2">

          {/* {question.exampleCode.replace(/\\n/g, '\n')} */}
          {question.exampleCode}
        </SectionFrame>
        <SectionFrame title="回答" className="mt-2">
          <TextArea handleChange={handleChange} value={value} />
          {
            usePostCodeCheck.resultData?.result === "ok" &&
            (
              <div className="rounded-md bg-green-200 p-4 shadow-md">
                <p className="text-lg font-semibold text-green-800">正解！バイト数は{usePostCodeCheck.resultData?.byte}バイトでした！</p>
              </div>
            )
          }
          {
            usePostCodeCheck.resultData?.result === "ng" &&
            (
              <div className="rounded-md bg-red-100 p-4 shadow-md">
                <div className="mb-2 font-semibold text-red-800">出力結果が正しくありません。</div>
                <div className="flex items-center">
                  <div className="mr-2 text-gray-700">出力結果</div>
                  <div className="text-gray-900">{usePostCodeCheck.resultData?.response}</div>
                </div>
              </div>
            )
          }
          {
            usePostCodeCheck.resultData?.result === "error" && (
              <div className="rounded-md bg-yellow-100 p-4 shadow-md">
                <div className="mb-2 font-semibold text-yellow-800">コードが間違っています。</div>
                <div className="flex items-center">
                  <div className="mr-2 text-gray-700">エラーコード</div>
                  <div className="text-gray-900">{usePostCodeCheck.resultData?.error}</div>
                </div>
              </div>
            )
          }
          <div className='mt-3'>
            <SmallButton text="回答を送信する" handleClick={submitCode} variant="blue" disable={usePostCodeCheck.isLoading} />
          </div>
        </SectionFrame>
      </div>
      <div className='m-5'>
        <SmallButton text="戻る" handleClick={() => transition('/questions')} variant="black" />
      </div>
    </>
  )
})
