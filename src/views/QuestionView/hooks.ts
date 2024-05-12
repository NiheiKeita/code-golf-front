
import { useState } from "react";
import { usePostCodeCheckAPI } from "@/api/usePostCodeCheck";
import { useRouter } from "next/navigation";
import { useGetQuestionAPI } from "@/api/useGetQuestionAPI";

export const useQuestionView = () => {
    const usePostCodeCheck = usePostCodeCheckAPI()
    const { isLoading, getQuestion, question } = useGetQuestionAPI()
    const [value, setValue] = useState('');
    const handleChange = (changeValue: string) => {
        setValue(changeValue)
    }

    const submitCode = () => {
        const postData = {
            "code": value,
        }
        usePostCodeCheck.postCodeCheck(postData)
    }
    const router = useRouter()
    const transition = (url: string) => {
        router.push(url)
    }

    return {
        value,
        handleChange,
        submitCode,
        transition,
        question,
        getQuestion,
        isLoading,
        usePostCodeCheck,
    }
}