"use client";
import Link from "next/link"
import { FooterSection, FooterSimple } from "@/styles/FooterStyles";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    return (
        <>
            {pathname === "/member/login"
                ?
                <FooterSimple>
                    &copy; PointApp
                </FooterSimple>
                :
                <FooterSection>
                    <div className="copy">
                        &copy; PointApp
                    </div>
                    <nav>
                        <Link href="/agreement" scroll={false}>Agreement</Link>
                        <Link href="/privacy" scroll={false}>privacy</Link>
                    </nav>
                </FooterSection>
            }
        </>
    );
}
