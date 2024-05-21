"use client"

import React, { useEffect } from "react"
import { RankingIcon } from "../../components/RankingIcon"
import { useGetRankingAPI } from "@/api/useGetRankingAPI"
import { format } from 'date-fns'
import { Loading } from "./components/Loading"
import { useGetQuestionAPI } from "@/api/useGetQuestionAPI"

type Props = {
  id: string,
}
export const RankingView = React.memo<Props>(function RankingView({
  id,
}) {
  const { getQuestion, question } = useGetQuestionAPI()
  const { isLoading, getQuestionRanking, ranking } = useGetRankingAPI()
  useEffect(() => {
    getQuestionRanking(id)
    setInterval(() => {
      getQuestionRanking(id)
    }, 10000);
  }, [id, getQuestionRanking])
  useEffect(() => {
    getQuestion(id)
  }, [getQuestion, id])

  //Questionがなかったら一覧画面に返す
  if (!question) {
    return <></>
  }

  return (
    <div className="container mx-auto my-5 font-semibold">
      <div className="mb-4 text-3xl">{question.title}ランキング</div>
      <div className="grid">
        <div className="grid grid-cols-6 rounded-lg bg-gray-800 text-gray-200">
          <div className="col-span-1 px-4 py-2">順位</div>
          <div className="col-span-2 px-4 py-2">名前</div>
          <div className="col-span-2 px-4 py-2">バイト数</div>
          <div className="col-span-1 px-4 py-2"></div>
        </div>
        {ranking?.map((user, index) => {
          const rank = index + 1;
          return (
            <div key={index} className={`grid grid-cols-6 rounded-lg ${index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-600'} text-gray-200`}>
              <div className="col-span-1 flex p-2 text-left">
                <div className="relative flex w-8 items-center justify-center">
                  <RankingIcon rank={rank} />
                </div>
                {rank}
              </div>
              <div className="col-span-2 px-4 py-2 text-left">{user.user_name}</div>
              <div className="col-span-2 px-4 py-2 text-left">{user.code_byte}</div>
              <div className="col-span-1 flex items-end justify-end px-4 py-2 text-right text-xs">
                {format(new Date(user.created_at), 'MM/dd HH:mm')}
              </div>
            </div>
          );
        })}
      </div>
      {isLoading && (
        <div className="mt-4 flex justify-center">
          <Loading />
        </div>
      )}
    </div>
  )
})
