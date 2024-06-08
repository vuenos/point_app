"use client";
import {useEffect, useState} from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HeaderSection } from "@/styles/HeaderStyles";
import { LogoutButton } from "@/styles/ComponentStyles"
import StandAloneHeader from "./StandAloneHeader";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Loading from "@/app/loading";
import { FaRightFromBracket } from "react-icons/fa6";

export default function Header() {
    const [userName, setUserName] = useState<string>("John Doe");

    const { data: session, status } = useSession();

    const pathname = usePathname();

    const menuData = [
        { id: "menu01", title: `${session ? (session.user.name) : ""}`, path: "/member/mypage" },
        { id: "menu02", title: "Users", path: "/member/users" },
    ];

    const showSession = () => {
        if (status === "authenticated") {
            return (
                <LogoutButton
                    type="button"
                    onClick={() => {
                        signOut();
                    }}
                >
                    <FaRightFromBracket />
                </LogoutButton>
          )
        } else if (status === "loading") {
          return <span>....</span>
        } else {
            return <Link href="/member/login" className="login-link" scroll={false}>Log In</Link>
        }
    }

    return (
        <>
            {pathname === "/member/login"
                ? <StandAloneHeader />
                : 
                <HeaderSection>
                    <h1>
                        <Link href="/" scroll={false}>App</Link>
                    </h1>
        
                    <nav>
                        {menuData.map((menuItem) => (
                            <Link
                                key={menuItem.id}
                                href={menuItem.path}
                                className={`${menuItem.path === pathname ? "active" : ""}`}
                                scroll={false}
                            >
                                {menuItem.title}
                            </Link>
                        ))}
                        {!(status === "authenticated") && !(pathname === "/member/join") ? <Link href="/member/join" className="signup-link" scroll={false}>Sign Up</Link> : ""}
                        {showSession()}
                    </nav>
                </HeaderSection>
            }
        </>
    )
}
