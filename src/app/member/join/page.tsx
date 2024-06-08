"use client";

import { FormEvent, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {FormSection, InputWithLabel, InputWithOption, OAuthSection} from "@/styles/FormStyles";
import InputGroup from "@/components/forms/InputGroup";
import { BiLogoGoogle } from 'react-icons/bi';
import { BiSolidShow } from 'react-icons/bi';
import { BiSolidHide } from 'react-icons/bi';
import {
  ButtonPrimary,
  CalloutBox,
  HorizontalRule,
  InputPasswordShow,
  LinkStyle,
  OAuthCallButton
} from "@/styles/ComponentStyles";
import {RiGithubFill, RiGoogleFill, RiKakaoTalkFill} from "react-icons/ri";

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
    <>
      <h2>Sign Up</h2>

      <FormSection>
        <fieldset>
          <legend>Input Your Info</legend>

          <form onSubmit={handleSubmit}>
            {error && <CalloutBox className="error"><h4 className="title">Error</h4> {error}</CalloutBox>}

            <InputGroup
              type="text"
              title="Full name"
              label="Full name"
              placeholder="Full name"
              name="name"
            />

            <InputGroup
              type="email"
              title="Email"
              label="Email"
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
              Sign Up
            </ButtonPrimary>

            <HorizontalRule />

            <OAuthSection>
              <span className="title">Sign in with: </span>
              <OAuthCallButton
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("google")
                }}>
                <RiGoogleFill />
              </OAuthCallButton>

              <OAuthCallButton
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("github")
                }}>
                <RiGithubFill />
              </OAuthCallButton>

              <OAuthCallButton
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("kakao")
                }}>
                <RiKakaoTalkFill />
              </OAuthCallButton>
            </OAuthSection>

          </form>
        </fieldset>

        <LinkStyle href="/member/login" $scroll={false}>
          Already have an account?
        </LinkStyle>
      </FormSection>
    </>
  );
}

export default Signup;
