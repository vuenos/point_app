"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/forms/Input";
import { ButtonPrimary } from "@/styles/ComponentStyles";
import InputGroup from "@/components/forms/InputGroup";
import axios from "axios";

export default function Join() {
    const router = useRouter();
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const userInput = {
        email,
        name,
        password,
    }

    const submitHandler = async (event) => {
        event.preventDefault();
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
            console.log(error.message)
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
                        inputId="email"
                        type="email"
                        label="이메일"
                        title="Email"
                        required={true}
                        value={email}
                        placeholder="Email"
                        className="input-text"
                        onchange={(e) => setEmail(e.target.value)}
                    />
                    <InputGroup 
                        inputId="name"
                        type="text"
                        label="Name"
                        title="Name"
                        required={true}
                        value={name}
                        placeholder="Name"
                        className="input-text"
                        onchange={(e) => setName(e.target.value)}
                    />

                    <InputGroup 
                        inputId="password"
                        type="password"
                        label="Password"
                        title="Password"
                        required={true}
                        value={password}
                        placeholder="Password"
                        className="input-text"
                        onchange={(e) => setPassword(e.target.value)}
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
