"use client";

import { StandAloenHeaderSection } from "@/styles/HeaderStyles";
import Link from "next/link";

export default function StandAloneHeader () {

    return (
        <StandAloenHeaderSection>
            <h1>
                <Link href="/">App</Link>
            </h1>

            <nav>
                <Link href="/member/join">Sign Up</Link>
            </nav>
        </StandAloenHeaderSection>
    )
}