"use client";

import { useRouter } from "next/navigation";
import { StandAloenHeaderSection } from "@/styles/HeaderStyles";
import { ButtonBackToPage } from "@/styles/ComponentStyles";
import { RiArrowLeftLine } from "react-icons/ri";

export default function StandAloneHeader () {
    const router = useRouter();

    return (
        <StandAloenHeaderSection>
            <nav>
                <ButtonBackToPage 
                    type="button" 
                    onClick={() => router.back()}
                >   
                    <RiArrowLeftLine />
                    Back to page
                </ButtonBackToPage>
            </nav>
        </StandAloenHeaderSection>
    )
}