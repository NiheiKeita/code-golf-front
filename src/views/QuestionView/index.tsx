"use client"

import { SectionFrame } from '@/components/SectionFrame'
import { TextArea } from '@/components/TextArea'
import React from "react"
import { useQuestionView } from './hooks'
import { LoadingView } from '@/components/LoadingView'
import { SmallButton } from '@/components/SmallButton'
import { Title } from '@/components/Title'

type Props = {
  id: string,
}
export const QuestionView = React.memo<Props>(function QuestionView({
  id,
}) {
  const {
    value,
    handleChange,
    submitCode,
    transition,
    question,
    isLoading,
    usePostCodeCheck,
    userName,
    handleNameChange,
    userNameError
  } = useQuestionView(id)


  //Questionがなかったら一覧画面に返す
  if (isLoading || !question) {
    return <LoadingView variant='blue' />
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl rounded-lg bg-gray-700 p-10 shadow-lg backdrop-blur-md">
        <Title>コードを綺麗にしよう！！</Title>
        <div className="mt-5">
          <SectionFrame title={question.title}>
            {question.detail}
          </SectionFrame>
          <SectionFrame title="実装例" className="mt-2">
            {question.example_code}
          </SectionFrame>
          <SectionFrame title="回答" className="mt-2">
            <TextArea handleChange={handleChange} value={value} />
            {usePostCodeCheck.resultData?.result === "ok" && (
              <div className="rounded-md bg-green-200 p-4 shadow-md">
                <p className="text-lg font-semibold text-green-800">正解！バイト数は{usePostCodeCheck.resultData?.byte}バイトでした！</p>
              </div>
            )}
            {usePostCodeCheck.resultData?.result === "ng" && (
              <div className="rounded-md bg-red-100 p-4 shadow-md">
                <div className="mb-2 font-semibold text-red-800">出力結果が正しくありません。</div>
                <div className="items-center">
                  <div className="mr-2 font-semibold text-gray-700">出力結果</div>
                  <div className="mt-2 text-gray-900">{usePostCodeCheck.resultData?.response}</div>
                </div>
              </div>
            )}
            {usePostCodeCheck.resultData?.result === "error" && (
              <div className="rounded-md bg-yellow-100 p-4 shadow-md">
                <div className="mb-2 font-semibold text-yellow-800">コードが間違っています。</div>
                <div className="flex items-center">
                  <div className="mr-2 text-gray-700">エラーコード</div>
                  <div className="text-gray-900">{usePostCodeCheck.resultData?.error}</div>
                </div>
              </div>
            )}
            <div className="mt-3 flex items-center">
              <div className="mr-2">名前：</div>
              <input
                value={userName ?? ''}
                onChange={(e) => handleNameChange(e.target.value)}
                className="min-w-20 rounded-md border-2 border-gray-500 bg-gray-600 px-4 py-2 text-gray-200 placeholder:text-gray-400 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
              {userNameError && <div className="ml-2 mt-1 rounded-md bg-red-500 p-2 text-sm text-red-100 ">{userNameError}</div>}
            </div>
            <div className="mt-3">
              <SmallButton
                text="回答を送信する"
                handleClick={() => submitCode(String(question.id))}
                variant="blue"
                disable={usePostCodeCheck.isLoading}
              />
            </div>
          </SectionFrame>
        </div>
        <div className="mt-7">
          <SmallButton text="戻る" handleClick={() => transition('/questions')} variant="black" />
        </div>
      </div>
    </div>
  )
})
