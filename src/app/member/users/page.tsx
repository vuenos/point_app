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
            const { data, status } = await axios.get("/api/users/");
            // const data: Users[] = await respnose.json();
            if (status === 200) {
                setUsers(data);
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
            <ul>
                {users && users.map((user) => (
                    <li key={user._id}>
                        {user.email} / {user.name}
                    </li>
                ))}
            </ul>
        </>
    )
}