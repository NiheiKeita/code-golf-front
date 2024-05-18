"use client"

import { Question } from "@/types/Question"
import React, { useEffect } from "react"
import { RankingIcon } from "../../components/RankingIcon"
import { useGetRankingAPI } from "@/api/useGetRankingAPI"
import { format } from 'date-fns'
import { Loading } from "./components/Loading"

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


export const RankingView = React.memo<Props>(function RankingView({
  id,
}) {
  const { isLoading, getQuestion, ranking } = useGetRankingAPI()
  useEffect(() => {
    getQuestion(id)
    setInterval(() => {
      getQuestion(id)
    }, 10000);
  }, [getQuestion, id])

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

  //Questionがなかったら一覧画面に返す
  if (!question) {
    return <></>
  }

  return (
    <>
      <div className="container mx-auto my-5 font-semibold">
        <div className="mb-4 text-3xl  text-black">{question.title}ランキング</div>
        <div className="grid">
          <div className='grid grid-cols-6 rounded-lg bg-gray-800 text-white'>
            <div className="col-span-1 px-4 py-2 ">順位</div>
            <div className="col-span-2 px-4 py-2 ">名前</div>
            <div className="col-span-2 px-4 py-2 ">バイト数</div>
            <div className="col-span-1 px-4 py-2  "></div>
          </div>
          {ranking?.map((user, index) => {
            const rank = index + 1
            return (
              <div key={index} className={`grid grid-cols-6 rounded-lg text-black ${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}`} >
                <div className="col-span-1 flex p-2 text-left">

                  <div className="relative flex w-8 items-center justify-center">
                    <RankingIcon rank={rank} />
                  </div>
                  {rank}
                </div>
                <div className="col-span-2 px-4 py-2 text-left">{user.user_name}</div>
                <div className="col-span-2 px-4 py-2 text-left">{user.code_byte}</div>
                <div className="col-span-1 flex items-end justify-end px-4 py-2 text-right text-xs">{format(new Date(user.created_at), 'MM/dd  HH:mm')}</div>
              </div>
            )
          }
          )}
        </div>
        {isLoading && <Loading />}
      </div >
    </>
  )
})
