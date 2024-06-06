"use client"

import React from "react"
import { Card } from "./components/Card"
import { LoadingIcon } from "@/components/LoadingIcon"
import { Title } from "@/components/Title"
import { SmallButton } from "@/components/SmallButton"
import { useQuestionView } from "./hooks"

export const QuestionListView = React.memo(function QuestionListView() {
  const {
    router,
    isLoading,
    questions,
  } = useQuestionView()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl rounded-lg bg-gray-700 p-10 shadow-lg backdrop-blur-md">
        <Title>ゴルフコース一覧</Title>
        {isLoading && <div className="flex size-full min-h-40 items-center justify-center"><LoadingIcon variant='blue' /></div>}
        <div className="grid w-full gap-1">
          {
            questions?.map((question, index) => {
              return <Card key={index} link={`/questions/${encodeURIComponent(question.id)}`} body={question.title} />
            })
          }
        </div>
        <div className="mt-7">
          <SmallButton text="戻る" handleClick={() => router.push('/')} variant="black" />
        </div>
      </div>
    </div>
  )
})