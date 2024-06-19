"use client";

import { FormEvent, useEffect, useState } from "react";
import { FormSection } from "@/styles/FormStyles";
import InputGroup from "@/components/forms/InputGroup";
import { Axios, AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function CardRegist() {

    const [error, setError] = useState();
    const { data: session, status } = useSession();
    const router = useRouter();
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {

        } catch(error: any) {
            console.log(error);
            if (error instanceof AxiosError) {
                //
            }
        }
    }

    if(!session) {
        return <div>Please login</div>
    } else if (status === "loading") {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <h2>Card Regist</h2>
    
                <FormSection>
                    <fieldset>
                        <legend>Input Card serial</legend>
    
                        <form onSubmit={handleSubmit}>
    
                        </form>
                    </fieldset>
                </FormSection>
            </>
        )
    }
    
}