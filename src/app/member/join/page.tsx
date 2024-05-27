"use client";

import Input from "@/components/forms/Input";
import InputGroup from "@/components/forms/InputGroup";

export default function Join() {
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
                        placeholder="Email"
                        className="input-text"
                    />

                    <InputGroup 
                        inputId="userPassword"
                        type="password"
                        label="비밀번호"
                        title="Password"
                        required={true}
                        placeholder="Passwod"
                        className="input-text"
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