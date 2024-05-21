
import { useState } from "react";

export const useQuestionView = () => {
    const [value, setValue] = useState('')

    const handleChange = (changeValue: string) => {
        setValue(changeValue)
        console.log(value)
    }
    return {
        value,
        handleChange,
    }
}