
import { useCallback, useState } from "react";

type User = {
    name: string,
    id: string,
}

export const usePostUserAPI = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState<User>()

    const postUser = useCallback(async (name?: string) => {
        const userName = localStorage.getItem("userName") ?? '';
        const userId = localStorage.getItem("userId");
        if (userId) {
            setUser({
                name: userName,
                id: userId,
            })
            return
        }
        if (!name) {
            return
        }
        setIsLoading(true)
        await fetch('http://localhost:8081/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors',
            body: JSON.stringify({ "name": name }),
        })
            .then(res => res.json())
            .then(data => {
                setIsLoading(false)
                localStorage.setItem("userName", data.name);
                localStorage.setItem("userId", data.id);
                setUser({
                    name: data.name,
                    id: data.id,
                })
            })
            .catch(() => {
                setIsLoading(false)
            })
    }, [])
    return { isLoading, postUser, user }
}
