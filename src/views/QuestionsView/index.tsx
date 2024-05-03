
import { Question } from "@/types/Question"
import React from "react"

type Props = {
  questions: Question[],
}

export const QuestionsView = React.memo<Props>(function QuestionsView({
  questions,
}) {
  return (
    <>
      <div>
        <div>
          <p className="text-black">
            問題一覧画面
          </p>
        </div>
      </div>
    </>
  )
})
