"use client";

import Input from "@/components/forms/Input";

export default function Join() {
    return (
        <>
            <h2>Sign Up</h2>

            <div>
                <form>
                    <div>
                        <label htmlFor="userId">Email</label>
                        <Input
                            inputId="userId"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}