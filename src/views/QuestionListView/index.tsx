"use client"

import React, { useEffect } from "react"
import { Card } from "./components/Card"
import { useGetQuestionListAPI } from "@/api/useGetQuestionList"
import { LoadingIcon } from "@/components/LoadingIcon"
import { Title } from "@/components/Title"

export const QuestionListView = React.memo(function QuestionListView() {
  const { isLoading, getQuestionList, questions } = useGetQuestionListAPI()

  useEffect(() => {
    getQuestionList()
  }, [getQuestionList])
  return (
    <div className="px-10 text-black">
      <Title>コードゴルフ一覧</Title>
      {isLoading && <div className="flex size-full min-h-40 items-center justify-center"><LoadingIcon variant='blue' /></div>}
      <div className="w-full">
        {
          questions?.map((question, index) => {
            return <Card key={index} link={`/questions/${encodeURIComponent(question.id)}`} body={question.title} />
          })
        }
      </div>
    </div >
  )
})