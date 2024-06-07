"use client";

import { FormEvent, useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from 'next-auth/react';
import { BiLogoGoogle } from 'react-icons/bi';
import { BiSolidShow } from 'react-icons/bi';
import { BiSolidHide } from 'react-icons/bi';
import { CalloutBox, ButtonPrimary, InputPasswordShow, HorizontalRule } from "@/styles/ComponentStyles";
import { LinkStyle } from "@/styles/ComponentStyles";
import { FormSection, InputWithOption } from "@/styles/FormStyles";
import InputGroup from "@/components/forms/InputGroup";

const SignIn = () => {
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
    <>
      <h2>Sign In</h2>

      <FormSection>
        <fieldset>
          <legend>Input Credentials Info</legend>

          <form onSubmit={handleSubmit}>
            {error && <CalloutBox className="error"><h4 className="title">Error</h4> {error}</CalloutBox>}

            <InputGroup
              type="email"
              label="Email"
              title="Email"
              placeholder="Email"
              name="email"
            />

            <InputWithOption>
              <InputGroup
                type={showPassword ? "text" : "password"}
                title="Password"
                label="Password"
                placeholder="Password"
                name="password"
              />
              <InputPasswordShow
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword(!showPassword)
                }}
              >
                {showPassword ? <BiSolidHide/> : <BiSolidShow/>}
              </InputPasswordShow>
            </InputWithOption>
            <ButtonPrimary type="submit">
              Login
            </ButtonPrimary>

            <HorizontalRule />

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                signIn("google")
              }}>
              <BiLogoGoogle/> Sign in with Google
            </button>

          </form>
        </fieldset>

        <LinkStyle href="/member/join" $scroll={false}>
          Don&apos;t have an account?
        </LinkStyle>
      </FormSection>
    </>
  );
}

export default SignIn;
