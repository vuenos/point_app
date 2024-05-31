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
                <Link href="/agreement" scroll={false}>Agreement</Link>
                <Link href="/privacy" scroll={false}>privacy</Link>
            </nav>
        </FooterSection>
    );
}