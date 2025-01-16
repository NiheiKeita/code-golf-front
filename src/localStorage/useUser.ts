import { useCallback } from "react";
import { LocalStorageUser } from "./types";

export const useLocalStorageUser = () => {
    const getLocalStorageUser = useCallback((): LocalStorageUser | null => {
        const user = localStorage.getItem("newUser")
        if (!user) return null

        return JSON.parse(localStorage.getItem("newUser") ?? '')
    }, [])

    const setLocalStorageUser = useCallback((user: LocalStorageUser) => {
        localStorage.setItem("newUser", JSON.stringify(user))

        return getLocalStorageUser()
    }, [getLocalStorageUser])

    return { getLocalStorageUser, setLocalStorageUser }
}
