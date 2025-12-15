"use client";

import { useState, useEffect, useCallback } from "react";
import axios, { AxiosError } from "axios";
import Loading from "@/app/loading";
import { CalloutBox } from "@/styles/ComponentStyles";

type Users = {
    _id: string;
    name?: string;
    email?: string;
    userEmail?: string;
    userName?: string;
};

export default function GetUsers () {
    const [users, setUsers] = useState<Users[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string>("");

    const getUsersHandler = useCallback(async () => {
        try {
            const res = await axios.get("/api/users/");
            
            if (res.status === 200) {
                setUsers(res.data);
                setLoading(false);
                console.log(`USER_DATA::: ${res.data} ${JSON.stringify(res.data)}`);
            }
        } catch(err) {
            setError(true);
            setLoading(false);
            const message =
                err instanceof AxiosError
                    ? err.response?.data?.message ?? err.message
                    : err instanceof Error
                        ? err.message
                        : "Unknown error";
            setErrMsg(message);
            console.log(message);
        }
    }, []);

    useEffect(() => {
        getUsersHandler();
    }, [getUsersHandler]);

    useEffect(() => {
        console.log(`USERS::: ${JSON.stringify(users)}`)
    }, [users]);
    

    if (loading) return <Loading />;
    if (error) return <CalloutBox className="error"><h4 className="title">Error</h4> {errMsg}</CalloutBox>;

    return (
        <>
            {(users.length > 0) ?
                <ul>
                    {users.map((user) => (
                        <li key={user._id.toString()}>
                            {user.name}({user.email})
                        </li>
                    ))}
                </ul>
            : 
                <CalloutBox className="error">
                    <h4 className="title">No data result</h4>
                </CalloutBox>
            }
        </>
    )
}
