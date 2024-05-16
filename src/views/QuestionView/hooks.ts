
import { useCallback, useState } from "react";
import { usePostCodeCheckAPI } from "@/api/usePostCodeCheck";
import { useRouter } from "next/navigation";
import { useGetQuestionAPI } from "@/api/useGetQuestionAPI";
import { usePostUserAPI } from "@/api/usePostUserAPI";
import { usePutUserAPI } from "@/api/usePutUserAPI";

export const useQuestionView = () => {
    const usePostCodeCheck = usePostCodeCheckAPI()
    const { isLoading, getQuestion, question } = useGetQuestionAPI()
    const { postUser, user } = usePostUserAPI()
    const { putUser } = usePutUserAPI()
    const [value, setValue] = useState('');
    const [userName, setUserName] = useState<string>('');
    const handleChange = (changeValue: string) => {
        setValue(changeValue)
    }
    const submitCode = () => {
        console.log("submitCode ")
        console.log(userName)
        updateOrCreateUser(userName)
        const postData = {
            "code": value,
            "id": user?.id,
        }
        usePostCodeCheck.postCodeCheck(postData)
    }
    const router = useRouter()
    const transition = (url: string) => {
        router.push(url)
    }
    const updateOrCreateUser = useCallback((name: string) => {
        const userId = localStorage.getItem("userId");
        const userName = localStorage.getItem("userName") ?? '';
        if (userId && userName != name) {
            putUser(name)
        } else {
            postUser(name)
        }
    }, [postUser, putUser])
    const handleNameChange = useCallback((name: string) => {
        setUserName(name)
    }, [setUserName])

    return {
        value,
        handleChange,
        submitCode,
        transition,
        question,
        getQuestion,
        isLoading,
        usePostCodeCheck,
        postUser,
        setUserName,
        userName,
        user,
        handleNameChange
    }
}