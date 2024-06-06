import { useGetQuestionListAPI } from "@/api/useGetQuestionList"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export const useQuestionView = () => {
    const router = useRouter()
    const { isLoading, getQuestionList, questions } = useGetQuestionListAPI()
    useEffect(() => {
        getQuestionList()
    }, [getQuestionList])

    return {
        router,
        isLoading,
        questions,
    }
}