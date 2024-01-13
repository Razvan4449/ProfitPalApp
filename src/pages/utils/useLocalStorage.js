import { useEffect, useState } from "react"

function useLocalState(defaultValue, key) {
    const [value, setValue] = useState(() => {
        const jwt = localStorage.getItem(key)

        return jwt !== null ? JSON.parse(jwt) : defaultValue
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);

    return [value, setValue]
}



export { useLocalState }