"use client"

import React, { useCallback, useEffect } from "react"
import { Card } from "./components/Card"
import { useGetQuestionListAPI } from "@/api/useGetQuestionList"
import { LoadingIcon } from "@/components/LoadingIcon"
import { Title } from "@/components/Title"
import { SmallButton } from "@/components/SmallButton"
import router from "next/router"

export const QuestionListView = React.memo(function QuestionListView() {
  const { isLoading, getQuestionList, questions } = useGetQuestionListAPI()

  useEffect(() => {
    getQuestionList()
  }, [getQuestionList])
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 p-4 text-white">
      <div className="w-full max-w-3xl rounded-lg bg-gray-700 p-10 shadow-lg backdrop-blur-md">
        <Title>コードゴルフ一覧</Title>
        {isLoading && <div className="flex size-full min-h-40 items-center justify-center"><LoadingIcon variant='blue' /></div>}
        <div className="grid w-full gap-1">
          {
            questions?.map((question, index) => {
              return <Card key={index} link={`/questions/${encodeURIComponent(question.id)}`} body={question.title} />
            })
          }
        </div>
        <div className="m-5">
          <SmallButton text="戻る" handleClick={() => router.push('/')} variant="black" />
        </div>
      </div>
    </div>
  )
})