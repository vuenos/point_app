"use client";

import { FormEvent, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from 'next-auth/react';
import { BiLogoGoogle } from 'react-icons/bi';
import { BiSolidShow } from 'react-icons/bi';
import { BiSolidHide } from 'react-icons/bi';

const Signin = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session, router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (res?.error) {
      setError(res.error as string)
    }

    if (!res?.error) {
      return router.push("/")
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        {error && <div>{error}</div>}
        <h1>Signin</h1>

        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
        />

        <label>Password:</label>
        <div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowPassword(!showPassword)
            }}
          >
            {showPassword ? <BiSolidHide /> : <BiSolidShow />}
          </button>
        </div>
        <button type="submit">
          Signup
        </button>
        

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            signIn("google")
          }}>
          <BiLogoGoogle /> Sign in with Google
        </button>
        <Link href="/member/join">
          Don&apos;t have an account?
        </Link>
      </form>
    </section>
  );
}

export default Signin;
