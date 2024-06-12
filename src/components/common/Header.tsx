"use client";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {HeaderSection} from "@/styles/HeaderStyles";
import {LogoutButton, SkeletonSpan} from "@/styles/ComponentStyles"
import StandAloneHeader from "./StandAloneHeader";
import {useSession} from "next-auth/react";
import {signOut} from "next-auth/react";
import {FaRightFromBracket} from "react-icons/fa6";
import UserDialog from "@/components/common/UserDialog";

export default function Header() {
  const {data: session, status} = useSession();

  const pathname = usePathname();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const menuData = [
    {id: "menu01", title: "Users", path: "/member/users"},
  ];

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <>
          <button onClick={handleUserClick}>{session.user.name}</button>
          <LogoutButton
            type="button"
            onClick={() => {
              signOut();
            }}
          >
          <FaRightFromBracket/>
        </LogoutButton>
        </>
      )
    } else if (status === "loading") {
      return (
        <>
          <SkeletonSpan width="67px" height="32px" margin="0 0 0 16px"/>
          <SkeletonSpan width="57px" height="32px" margin="0 0 0 16px"/>
        </>
      )
    } else {
      return (
        <>
          <Link href="/member/join" className="signup-link" scroll={false}>Sign Up</Link>
          <Link href="/member/login" className="login-link" scroll={false}>Log In</Link>
        </>
      )
    }
  }

  const handleUserClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      {pathname === "/member/login"
        ? <StandAloneHeader/>
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

            {showSession()}

            <UserDialog isOpen={isDialogOpen} onClose={handleCloseDialog} user={session?.user}/>
          </nav>
        </HeaderSection>
      }
    </>
  )
}
