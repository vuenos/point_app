"use client";
import {useEffect, useState} from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HeaderSection } from "@/styles/HeaderStyles";
import StandAloneHeader from "./StandAloneHeader";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Loading from "@/app/loading";

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
                <button
                    type="button"
                    onClick={() => {
                        signOut();
                    }}
                >
                    Logout
                </button>
          )
        } else if (status === "loading") {
            return <Loading />
        } else {
            return <Link href="/member/login" scroll={false}>Login</Link>
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
                        {!(status === "authenticated") && <Link href="/member/join"  scroll={false}>Sign Up</Link>}
                        {showSession()}
                    </nav>
                </HeaderSection>
            }
        </>
    )
}
