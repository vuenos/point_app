"use client";
import Link from "next/link"
import { FooterSection } from "@/styles/FooterStyles";

export default function Footer() {
    return (
        <FooterSection>
            <div className="copy">
                &copy; Pointapp
            </div>

            <nav>
                <Link href="/agreement">Agreement</Link>
                <Link href="/privacy">privacy</Link>
            </nav>
        </FooterSection>
    );
}