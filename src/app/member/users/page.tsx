"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./loading";

type Users = {
    userEmail: string,
    userName: string,
    _id: string,
}

export default function GetUsers () {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);

    const getUsersHandler = async () => {
        
        setLoading(true);
        try {
            const { data, status } = await axios.get("/api/users/");
            // const data: Users[] = await respnose.json();
            setTimeout(() => {
                if (status === 200) {
                    setUsers(data);
                    console.log(`USER_DATA::: ${data}`);
                }                
                setLoading(false);
            }, 1500);
        } catch(error) {
            console.log(error.message);
        }
        
    }

    useEffect(() => {
        getUsersHandler();
        console.log(`USERS::: ${users}`)
    }, [])

    return (
        <>
            {loading && <Loading />}
            {users ?
                <ul>
                    {users && users.map((user) => (
                        <li key={user._id.toString()}>
                            {user.name}({user.email})
                        </li>
                    ))}
                </ul>
                : <div>No data</div>
            }            
        </>
    )
}
