"use client";
import { useState } from "react";
import axios from "axios";
import { HomeSection } from "@/styles/HomeStyles";
import { ButtonPrimary } from "@/styles/ComponentStyles";
import Link from "next/link";
import Loading from "./loading";

export default function Home() {
  const [msg, setMsg] = useState<string>("");
  const [callStatus, setCallStatus] = useState<string>();
  const [userData, setUserData] = useState<any>();

  return (
    <>
      <h2>Home</h2>

      <HomeSection>
        ...Home
      </HomeSection>

    </>
  );
}
