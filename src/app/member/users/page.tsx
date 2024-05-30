"use client";

import { useState, useEffect } from "react";
import axios from "axios";

type Users = {
    userEmail: string,
    userName: string,
    _id: string,
}

export default function GetUsers () {
    const [users, setUsers] = useState([]);

    const getUsersHandler = async () => {
        try {
            const res = await axios.get("/api/users/");
            // const data: Users[] = await res.json();
            
            if (res.status === 200) {
                setUsers(res.data);
                console.log(`USER_DATA::: ${res.data} ${JSON.stringify(res.data)}`);
            }
        } catch(error) {
            console.log(error.message);
        }
        
    }

    useEffect(() => {
        getUsersHandler();
        console.log(`USERS::: ${JSON.stringify(users)}`)
    }, [])

    return (
        <>
            {(users.length >= 1) ?
                <ul>
                    {users.map((user) => (
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
