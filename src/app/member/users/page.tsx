"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "@/app/loading";
import { CalloutBox } from "@/styles/ComponentStyles";

type Users = {
    userEmail: string,
    userName: string,
    _id: string,
}

export default function GetUsers () {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);
    const [errMsg, setErrMsg] = useState<string>("");

    const getUsersHandler = async () => {
        try {
            const res = await axios.get("/api/users/");
            // const data: Users[] = await res.json();
            
            if (res.status === 200) {
                setUsers(res.data);
                setLoading(false);
                console.log(`USER_DATA::: ${res.data} ${JSON.stringify(res.data)}`);
            }
        } catch(error) {
            setError(true);            
            setLoading(false);
            setErrMsg(
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            );
            console.log(error.message);
        }
        
    }

    useEffect(() => {
        getUsersHandler();
        console.log(`USERS::: ${JSON.stringify(users)}`)
    }, []);
    

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
