import { Question } from "@/types/Question"
import React, { useCallback, useEffect, useState } from "react"
import { Card } from "./components/Card"

const questions: Question[] = [
  {
    id: 1,
    title: "question1",
    detail: "いわゆる「FizzBuzz」を実装してください。 1から100までの数字について、その数が3の倍数なら「Fizz」、5の倍数なら「Buzz」、15の倍数なら「FizzBuzz」、それ以外ならその数そのものを出力してください。それぞれの出力は改行で区切ってください。",
    exampleCode: 'for ($i = 1; $i <= 100; $i++) {/n   echo match([$i % 3 === 0, $i % 5 === 0]) {/n    [true, true] => "FizzBuzz",/n      [true, false] => "Fizz",/n        [false, true] => "Buzz",/n         [false, false] => $i,/n      }, PHP_EOL;/n    }',
  },
  {
    id: 2,
    title: "question2",
    detail: "RFC 4648 で定義された Base32 エンコーディングを実装してください。 標準入力から与えられる各行に対し、Base32 エンコードをおこなった文字列を標準出力へ改行区切りで出力してください。 なお、アルファベットの出力には大文字を用いてください。",
    exampleCode: 'question2の例のコード',
  },
]
const useGetData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>();

  const getImages = useCallback(() => {
    setIsLoading(true);
    fetch('http://localhost:8081/questions')
      .then(res => res.text())
      .then(data => {
        console.log(data)
        setIsLoading(false)
        setData(data)
        console.log("ok")
      }).catch(() => {
        console.log("ng")
        setIsLoading(false)
      })

  }, [])
  return { isLoading, getImages, data }
}

export const QuestionListView = React.memo(function QuestionListView() {

  // const { isLoading, getImages, data } = useGetData()
  // // console.log(isLoading ? "d" : "ddd")
  // useEffect(() => {
  //   getImages()
  // }, [getImages])
  // const onSubmit = async (): Promise<any> => {
  //   try {
  //     const res = await fetch("http://localhost:8081/questions")
  //       .then(res => {
  //         console.log("ok")
  //       })
  //       .then(text => {
  //         console.log("ok")
  //       })
  //   } catch (err) {
  //     alert(err)
  //   }
  // }

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:8081/questions', {
      mode: 'cors'
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <>
      <div className="">
        <p className="my-10 text-5xl font-bold">
          問題一覧画面
        </p>
        <button onClick={fetchUsers} >ddd</button>
        <div className="w-full px-10">
          {
            questions.map((question, index) => {
              return <Card key={index} link={`/questions/${encodeURIComponent(question.id)}`} body={question.title} />
            })
          }
        </div>
      </div >
    </>
  )
})