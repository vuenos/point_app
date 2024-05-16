"use client";
import { MainSection } from "@/styles/LayoutStyles";

export default function Wrapper({children}) {
    return (
        <MainSection>
            {children}
        </MainSection>
    );
}