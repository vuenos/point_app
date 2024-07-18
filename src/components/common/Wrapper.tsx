"use client";
import { useRef } from "react";
import { MainSection } from "@/styles/LayoutStyles";

export default function Wrapper({children}) {
    const mainRef = useRef();

    return (
        <MainSection id="main" ref={mainRef}>
            {children}
        </MainSection>
    );
}