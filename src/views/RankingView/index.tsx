"use client"

import { Question } from "@/types/Question"
import React from "react"
import { SmallButton } from '@/components/SmallButton'

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

const rankings = [
  {
    name: "User1",
    bytes: 1500,
    rank: 1,
    time: "10:30 AM"
  },
  {
    name: "User2",
    bytes: 1200,
    rank: 2,
    time: "11:15 AM"
  },
  {
    name: "User3",
    bytes: 1000,
    rank: 3,
    time: "11:45 AM"
  },
  {
    name: "User4",
    bytes: 900,
    rank: 4,
    time: "12:00 PM"
  },
  {
    name: "User5",
    bytes: 800,
    rank: 5,
    time: "12:30 PM"
  },
  {
    name: "User6",
    bytes: 700,
    rank: 6,
    time: "1:00 PM"
  },
  {
    name: "User7",
    bytes: 600,
    rank: 7,
    time: "1:30 PM"
  },
  {
    name: "User8",
    bytes: 500,
    rank: 8,
    time: "2:00 PM"
  },
  {
    name: "User9",
    bytes: 400,
    rank: 9,
    time: "2:30 PM"
  },
  {
    name: "User10",
    bytes: 300,
    rank: 10,
    time: "3:00 PM"
  }
];

export const RankingView = React.memo<Props>(function RankingView({
  id,
}) {

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
            <div className="col-span-1 px-4  py-2 ">ランキング</div>
            <div className="col-span-2 px-4  py-2 ">名前</div>
            <div className="col-span-2 px-4  py-2 ">バイト数</div>
            <div className="col-span-1 px-4  py-2  "></div>
          </div>
          {rankings.map((user, index) => {
            const ranking = index + 1
            const rankingIcon = () => {
              switch (ranking) {
                case 1:
                  return (
                    <div className="w-5">
                      王
                    </div>
                  )
                default:
                  return (
                    <div className="w-5">
                    </div>
                  )
              }
            }
            return (
              <div key={index} className={`grid grid-cols-6 rounded-lg bg-gray-800 text-black ${index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'}`} >
                <div className="col-span-1 px-4 py-2 text-left flex">
                  {rankingIcon()}
                  {ranking}
                </div>
                <div className="col-span-2 px-4 py-2 text-left">{user.name}</div>
                <div className="col-span-2 px-4 py-2 text-left">{user.bytes}</div>
                <div className="col-span-1 px-4 py-2 text-right text-xs">{user.time}</div>
              </div>
            )
          }
          )}
        </div>
      </div >
    </>
  )
})
