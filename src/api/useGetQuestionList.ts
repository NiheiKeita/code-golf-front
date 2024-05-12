import { Question } from "@/types/Question";
import { useCallback, useState } from "react";

export const useGetQuestionListAPI = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [questions, setQuestions] = useState<Question[]>()
    const getQuestionList = useCallback(async () => {
        setIsLoading(true)
        await fetch('http://localhost:8081/api/questions', {
            mode: 'cors'
        })
            .then(res => res.json())
            .then(questions => {
                setIsLoading(false)
                questions.map((question: any) => {
                    const id = question.id
                    const title = question.title
                    const detail = question.detail
                    const exampleCode = question.exampleCode
                    return { id, title, detail, exampleCode }
                })
                setQuestions(questions)
            }).catch(() => {
                setIsLoading(false)
            })
    }, [])
    return { isLoading, getQuestionList, questions }
}
