"use client"

import React, { useEffect } from "react"
import { Card } from "./components/Card"
import { useGetQuestionListAPI } from "./api/useGetQuestionList"

export const QuestionListView = React.memo(function QuestionListView() {
  const { isLoading, getQuestionList, questions } = useGetQuestionListAPI()

  useEffect(() => {
    getQuestionList()
  }, [getQuestionList])
  return (
    <>
      <div className="text-black">
        <p className="my-10 text-5xl font-bold">
          問題一覧画面
        </p>
        {isLoading && <>ローディング</>}
        <div className="w-full px-10">
          {
            questions?.map((question, index) => {
              return <Card key={index} link={`/questions/${encodeURIComponent(question.id)}`} body={question.title} />
            })
          }
        </div>
      </div >
    </>
  )
})