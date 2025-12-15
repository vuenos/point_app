"use client";
import { PropsWithChildren, useRef } from "react";
import { MainSection } from "@/styles/LayoutStyles";

export default function Wrapper({ children }: PropsWithChildren) {
    const mainRef = useRef<HTMLElement | null>(null);

    return (
        <MainSection id="main" ref={mainRef}>
            {children}
        </MainSection>
    );
}