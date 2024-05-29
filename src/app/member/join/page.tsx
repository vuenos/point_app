"use client";

import { useState } from "react";
import Input from "@/components/forms/Input";
import InputGroup from "@/components/forms/InputGroup";

export default function Join() {
    const [userEmail, setUserEmail] = useState<string>("");
    const [userName, setUserName] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");

    const submitHandler = () => {
        fetch("/api/users/regist", {
            method: "POST",
            body: JSON.stringify({userEmail, userName, userPassword})
        })
    }

    return (
        <>
            <h2>Sign Up</h2>

            <div>
                <form>
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
                        label="비밀번호"
                        title="Password"
                        required={true}
                        value={userPassword}
                        placeholder="Passwod"
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