"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { CalloutBox } from "@/styles/ComponentStyles";


export default function Mypage() {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState();
    const { data: session, status } = useSession();
    const router = useRouter();

    const getUserCards = async () => {
        if (status === "unauthenticated") {
            router.push("/member/login");
        }

        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/mypage`);
            if (res.status === 200) {
                setCards(res.data);
                console.log("DATA::", res.data)
            }
        } catch (error) {
            console.log(error.message);
            if (error instanceof AxiosError) {
                const errorMessage = error.response?.data.message;
                setError(errorMessage);
            }
        }
    };

    useEffect(() => {
        getUserCards();
    }, [status])

    return (
        <>
            <h2>My page</h2>
            {cards.length === 0 ? (
                <>
                    {error && <CalloutBox className="error"><h4 className="title">Error</h4> {error}</CalloutBox>}
                    <div>No cards found</div>
                </>
            ) : (
                <ul>
                    {cards.map((card, index) => (
                        <li key={index}>
                            {card.cardNumber}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
