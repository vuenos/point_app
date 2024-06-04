"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/forms/Input";
import InputGroup from "@/components/forms/InputGroup";
import axios from "axios";

export default function Join() {
    const router = useRouter();
    const [userEmail, setUserEmail] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");

    const userInput = {
        userEmail,
        userName,
        userPassword,
    }

    const submitHandler = async () => {
        try {
            const { data, status } = await axios.post("/api/users/regist", userInput, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (status === 200) {
                console.log("Success insert data in Users Collection");
                console.log(data);
                router.push("/member/login")
            }
        } catch (error) {
            console.log(error.message())
        }
        // fetch("/api/users/regist", {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         userEmail,
        //         userName,
        //         userPassword
        //     })
        // })
        // const data = await res.json();
    }

    return (
        <>
            <h2>Sign Up</h2>

            <div>
                <form onSubmit={submitHandler}>
                    <InputGroup 
                        inputId="userEmail"
                        type="email"
                        label="이메일"
                        title="Email"
                        required={true}
                        value={userEmail}
                        placeholder="Email"
                        className="input-text"
                        onchange={(e) => setUserEmail(e.target.value)}
                    />
                    <InputGroup 
                        inputId="userName"
                        type="text"
                        label="Name"
                        title="Name"
                        required={true}
                        value={userName}
                        placeholder="Name"
                        className="input-text"
                        onchange={(e) => setUserName(e.target.value)}
                    />

                    <InputGroup 
                        inputId="userPassword"
                        type="password"
                        label="Password"
                        title="Password"
                        required={true}
                        value={userPassword}
                        placeholder="Password"
                        className="input-text"
                        onchange={(e) => setUserPassword(e.target.value)}
                    />

                    <Input
                        type="submit"
                        value="Submit"
                        className="input-button submit"
                    />
                </form>
            </div>
        </>
    );
}
