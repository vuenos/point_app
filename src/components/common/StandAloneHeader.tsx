"use client";

import { StandAloneHeaderSection } from "@/styles/HeaderStyles";
import Link from "next/link";

export default function StandAloneHeader () {

    return (
        <StandAloneHeaderSection>
            <h1>
                <Link href="/" scroll={false}>App</Link>
            </h1>

            <nav>
                <Link href="/member/join" className="signup-link" scroll={false}>Sign Up</Link>
            </nav>
        </StandAloneHeaderSection>
    )
}
