"use client";

import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import Loading from "./loading";

type Users = {
    userEmail: string,
    userName: string,
    _id: string,
}

export default function GetUsers () {
    const [users, setUsers] = useState([]);

    const getUsersHandler = async () => {
        try {
            const { data, status } = await axios.get("/api/users/");
            // const data: Users[] = await respnose.json();
            if (status === 200) {
                setTimeout(() => {
                    setUsers(data);
                }, 2000)
                console.log(`USER_DATA::: ${data}`);
            }
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
            <Suspense fallback={<Loading />}>
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
            </Suspense>            
        </>
    )
}
