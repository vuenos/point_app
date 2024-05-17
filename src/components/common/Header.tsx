"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderSection } from "@/styles/HeaderStyles";
import { RiUser3Fill } from "react-icons/ri";


export default function Header() {
    const [userName, setUserName] = useState<string>("John Doe");

    return (
        <HeaderSection>
            <h1>
                <Link href="/">App</Link>
            </h1>
            <nav>
                <Link href="/member/mypage"><RiUser3Fill />{userName}</Link>
                <Link href="/member/join">Sign up</Link>
                <Link href="/member/login">Login</Link>
            </nav>
        </HeaderSection>
    )
}