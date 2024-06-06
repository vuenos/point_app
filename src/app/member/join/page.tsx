"use client";

import { FormEvent, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BiLogoGoogle } from 'react-icons/bi';
import { BiSolidShow } from 'react-icons/bi';
import { BiSolidHide } from 'react-icons/bi';

const Signup = () => {
  const [error, setError] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  const labelStyles = "w-full text-sm";

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const signupResponse = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/auth/signup`, {
        email: formData.get("email"),
        password: formData.get("password"),
        name: formData.get("name"),
      });

      const res = await signIn("credentials", {
        email: signupResponse.data.email,
        password: formData.get("password"),
        redirect: false,
      });

      if (res?.ok) return router.push("/");
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      }
    }
  };

  return (
    <section>
        <form onSubmit={handleSubmit}>
            {error && <div className="">{error}</div>}
            <h1>Signup</h1>

            <label className={labelStyles}>Fullname:</label>
            <input
            type="text"
            placeholder="Fullname"
            name="name"
            />

            <label className={labelStyles}>Email:</label>
            <input
            type="email"
            placeholder="Email"
            name="email"
            />

            <label className={labelStyles}>Password:</label>

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
                onClick={() => signIn("google")}>
                <BiLogoGoogle className="text-2xl" /> Sign in with Google
            </button>

            <Link href="/member/login">
                Already have an account?
            </Link>
        </form>
    </section>
  );
}

export default Signup;