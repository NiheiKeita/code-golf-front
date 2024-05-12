
import { Question } from "@/types/Question";
import { useCallback, useState } from "react";

export const useGetQuestionAPI = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [question, setQuestion] = useState<Question>()

    const getQuestion = useCallback(async (questionID: string) => {
        setIsLoading(true)
        await fetch('http://localhost:8081/api/questions/' + questionID, {
            method: "Get",
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                data.exampleCode = data?.exampleCode.replace(/\\n/g, '\n')
                setIsLoading(false)
                setQuestion(data)
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [])
    return { isLoading, getQuestion, question }
}
