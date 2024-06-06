
import { useCallback, useEffect, useState } from "react";
import { usePostCodeCheckAPI } from "@/api/usePostCodeCheck";
import { useRouter } from "next/navigation";
import { useGetQuestionAPI } from "@/api/useGetQuestionAPI";
import { usePostUserAPI } from "@/api/usePostUserAPI";
import { usePutUserAPI } from "@/api/usePutUserAPI";
import { useLocalStorageUser } from "@/localStorage/useUser";

export const useQuestionView = (id: string) => {
    const usePostCodeCheck = usePostCodeCheckAPI()
    const { isLoading, getQuestion, question } = useGetQuestionAPI()
    const { postUser, user } = usePostUserAPI()
    const { putUser } = usePutUserAPI()
    const [value, setValue] = useState('')
    const [userNameError, setUserNameError] = useState('')
    const [userName, setUserName] = useState<string>('')
    const { getLocalStorageUser } = useLocalStorageUser()

    const handleChange = (changeValue: string) => {
        setValue(changeValue)
    }
    const submitCode = (questionID: string) => {
        if (!userName) {
            setUserNameError('名前を入れてください')
            return
        }
        setUserNameError('')
        updateOrCreateUser(userName)
        if (!user) return
        console.log(questionID)
        const postData = {
            "code": value,
            "id": user.id,
            "question_id": questionID,
        }
        usePostCodeCheck.postCodeCheck(postData)
    }
    const router = useRouter()
    const transition = (url: string) => {
        router.push(url)
    }
    const updateOrCreateUser = useCallback((name: string) => {
        const user = getLocalStorageUser()
        if (user && user.userName != name) {
            putUser(name)
        } else {
            postUser(name)
        }
    }, [getLocalStorageUser, postUser, putUser])
    const handleNameChange = useCallback((name: string) => {
        setUserName(name)
    }, [setUserName])

    useEffect(() => {
        getQuestion(id)
    }, [getQuestion, id])
    useEffect(() => {
        postUser()
        setUserName(user?.name ?? '')
    }, [postUser, setUserName, user?.name])

    return {
        value,
        handleChange,
        submitCode,
        transition,
        question,
        isLoading,
        usePostCodeCheck,
        userName,
        handleNameChange,
        userNameError
    }
}