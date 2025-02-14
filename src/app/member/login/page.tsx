"use client";

import {FormEvent, useEffect, useState} from "react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {useSession} from 'next-auth/react';
import {RiGoogleFill} from "react-icons/ri";
import {RiGithubFill} from "react-icons/ri";
import {RiKakaoTalkFill} from "react-icons/ri";
import {BiSolidShow} from 'react-icons/bi';
import {BiSolidHide} from 'react-icons/bi';
import {CalloutBox, ButtonPrimary, InputPasswordShow, HorizontalRule} from "@/styles/ComponentStyles";
import {LinkStyle} from "@/styles/ComponentStyles";
import {FormSection, InputWithOption, OAuthSection} from "@/styles/FormStyles";
import {OAuthCallButton} from "@/styles/ComponentStyles";
import InputGroup from "@/components/forms/InputGroup";
import Loading from "./loading";

const SignIn = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const {data: session} = useSession();

  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session, router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData(event.currentTarget);
      const res = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      });
      setLoading(false);
      return router.push("/")
    } catch (error: any) {
      setLoading(false);
      setError(error as string);
    }
  };

  return (
    <>

      <FormSection>
        <fieldset>
          <legend>Sign In</legend>

          <form onSubmit={handleSubmit}>
            {error && <CalloutBox className="error"><h4 className="title">Error</h4> {error}</CalloutBox>}
            {loading && <Loading/>}

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

            <HorizontalRule/>

            <OAuthSection>
              <span className="title">Sign in with: </span>
              <OAuthCallButton
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("google")
                }}>
                <RiGoogleFill/>
              </OAuthCallButton>

              <OAuthCallButton
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("github")
                }}>
                <RiGithubFill/>
              </OAuthCallButton>

              <OAuthCallButton
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("kakao")
                }}>
                <RiKakaoTalkFill/>
              </OAuthCallButton>
            </OAuthSection>

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
