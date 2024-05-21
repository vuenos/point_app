"use client";

import { useRouter } from "next/navigation";

export default function StandAloneHeader () {
    const router = useRouter();

    return (
        <>
            <nav>
                <button type="button" onClick={() => router.back()}>Back to page</button>
            </nav>
        </>
    )
}