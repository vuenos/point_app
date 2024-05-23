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
                        inputId="userEMail"
                        label="이메일"
                        required={true}
                        placeholder="Input email"
                    />
                </form>
            </div>
        </>
    );
}