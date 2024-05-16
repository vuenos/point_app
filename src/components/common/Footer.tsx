"use client";
import Link from "next/link"
import { FooterSection } from "@/styles/FooterStyles";

export default function Footer() {
    return (
        <FooterSection>
            <div>
                <span className="small-bi">App</span>
                <div className="copy">
                    &copy;Pointapp
                </div>
            </div>
            <nav>
                <Link href="/agreement">Agreement</Link>
                <Link href="/privacy">privacy</Link>
            </nav>
        </FooterSection>
    );
}