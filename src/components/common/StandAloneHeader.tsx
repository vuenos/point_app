"use client";

import { StandAloenHeaderSection } from "@/styles/HeaderStyles";
import Link from "next/link";

export default function StandAloneHeader () {

    return (
        <StandAloenHeaderSection>
            <h1>
                <Link href="/" scroll={false}>App</Link>
            </h1>

            <nav>
                <Link href="/member/join" scroll={false}>Sign Up</Link>
            </nav>
        </StandAloenHeaderSection>
    )
}