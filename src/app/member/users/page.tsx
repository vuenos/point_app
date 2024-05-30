"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "@/components/common/Loader";

type Users = {
    userEmail: string,
    userName: string,
    _id: string,
}

export default function GetUsers () {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsersHandler = async () => {
        setLoading(true);
        try {
            const { data, status } = await axios.get("/api/users/");
            // const data: Users[] = await respnose.json();
            if (status === 200) {
                setLoading(false);
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
            {loading ? (
                <Loader />
            ) : (
                <>
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
            )}
            
        </>
    )
}
