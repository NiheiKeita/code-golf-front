import { CodeCheckResult } from "@/types/CodeCheckResult";
import { useCallback, useState } from "react";

export const usePostCodeCheckAPI = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [resultData, setResultData] = useState<CodeCheckResult>()

    const postCodeCheck = useCallback(async (postData: any) => {
        setIsLoading(true)
        await fetch('http://localhost:8081/api/code-check', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors',
            body: JSON.stringify(postData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsLoading(false)
                setResultData(data)
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [])
    return { isLoading, postCodeCheck, resultData }
}