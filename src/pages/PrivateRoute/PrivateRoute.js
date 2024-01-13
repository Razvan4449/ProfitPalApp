import React, { useState } from "react";
import { useLocalState } from "../utils/useLocalStorage"
import { Navigate } from "react-router-dom"
import ajax from "../Services/FetchService";

const PrivateRoute = ({ children }) => {
    const [jwt, setJwt] = useLocalState("", "jwt")
    const [isLoading, setIsLoading] = useState(true)
    const [isValid, setIsValid] = useState(null)

    if (jwt) {
        ajax(`/api/auth/validate/${jwt}`, "GET", null).then((response) => {
            setIsValid(response.error === null ? true : false)
            setIsLoading(false)
        }).catch(e => {
            console.log(e);
        });
    } else {
        return <Navigate to="/login" />
    }

    return isLoading ? (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
            </div>
        </div>
    ) : (
        isValid === true ? children : <Navigate to="/login" />
    )
};

export default PrivateRoute