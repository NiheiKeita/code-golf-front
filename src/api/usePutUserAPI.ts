
import { useCallback, useState } from "react";

type User = {
    name: string,
    id: string,
}

export const usePutUserAPI = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState<User>()

    const putUser = useCallback(async (name?: string) => {
        if (!name) {
            return
        }
        const userId = localStorage.getItem("userId")
        if (!userId) {
            return
        }
        setIsLoading(true)
        await fetch('http://localhost:8081/api/users', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors',
            body: JSON.stringify({ "user_id": 10, "name": name }),
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
    return { isLoading, putUser, user }
}
