"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HeaderSection } from "@/styles/HeaderStyles";
import StandAloneHeader from "./StandAloneHeader";

export default function Header() {
    const [userName, setUserName] = useState<string>("John Doe");

    const pathname = usePathname();

    const menuData = [
        { id: "menu01", title: `${userName}`, path: "/member/mypage" },
        { id: "menu02", title: "Login", path: "/member/login" },
        { id: "menu03", title: "Sign up", path: "/member/join" },
    ];

    return (
        <>
            {pathname === "/member/login"
                ? <StandAloneHeader />
                : 
                <HeaderSection>
                    <h1>
                        <Link href="/">App</Link>
                    </h1>
        
                    <nav>
                        {menuData.map((menuItem) => (
                            <Link
                                key={menuItem.id}
                                href={menuItem.path}
                                className={`${menuItem.path === pathname ? "active" : ""}`}
                            >
                                {menuItem.title}
                            </Link>
                        ))}
                    </nav>
                </HeaderSection>
            }
        </>
    )
}
