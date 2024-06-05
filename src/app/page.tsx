"use client";
import { useState } from "react";
import axios from "axios";
import { HomeSection } from "@/styles/HomeStyles";
import { ButtonPrimary } from "@/styles/ComponentStyles";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import Loading from "./loading";

export default function Home() {
  const [msg, setMsg] = useState<string>("");
  const [callStatus, setCallStatus] = useState<string>();
  const [userData, setUserData] = useState<any>();

  const { status } = useSession();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className="text-[#888] text-sm text-999 mt-7 transition duration-150 ease hover:text-white"
          onClick={() => {
            signOut();
          }}
        >
          Logout here
        </button>
      )
    } else if (status === "loading") {
      return (
        <Loading />
      )
    } else {
      return (
        <Link
          href="/member/login"
          className="text-[#888] text-sm text-999 mt-7 transition duration-150 ease hover:text-white"
        >
          Login here
        </Link>
      )
    }
  }

  return (
    <>
      <h2>Home</h2>

      <HomeSection>
        {showSession()}
      </HomeSection>

    </>
  );
}
