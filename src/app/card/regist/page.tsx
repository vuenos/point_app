"use client";

import {FormEvent, useEffect, useState} from "react";
import {FormSection} from "@/styles/FormStyles";
import InputGroup from "@/components/forms/InputGroup";
import axios, {AxiosError} from "axios";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import Loading from "@/app/card/regist/loading";
import {ButtonPrimary, CalloutBox, LinkStyle} from "@/styles/ComponentStyles";
import onInput from "@/utils/onInput";

export default function CardRegist() {

  const [error, setError] = useState();
  const {data: session, status} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/member/login")
    }
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/card`, {
        cardNumber: formData.get("cardNumber"),
        cvc: formData.get("cvc"),
        userEmail: formData.get("userEmail"),
        userName: formData.get("userName"),
      });
      console.log(res.data)

    } catch (error) {
      console.log(error.message);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      }
    }
  }

  if (status === "authenticated") {
    return (
      <>
        <h2>Card Regist</h2>

        <FormSection>
          <fieldset>
            <legend>Input Card serial</legend>
            <form onSubmit={handleSubmit}>
              {error && <CalloutBox className="error"><h4 className="title">Error</h4> {error}</CalloutBox>}

              <InputGroup
                type="text"
                title="User email"
                label="User email"
                placeholder="User email"
                name="userEmail"
                defaultValue={session?.user.email}
                readonly={true}
              />

              <InputGroup
                type="text"
                title="User name"
                label="User name"
                placeholder="User name"
                name="userName"
                defaultValue={session?.user.name}
                readonly={true}
              />

              <InputGroup
                type="number"
                title="Card serial number"
                label="Card serial number"
                placeholder="Input card serial number 12 digits"
                name="cardNumber"
                maxlength={12}
                minlength={12}
                onInput={onInput}
              />
              <InputGroup
                type="number"
                title="CVC"
                label="CVC"
                placeholder="input CVC number 3 digits"
                name="cvc"
                maxlength={3}
                minlength={3}
                onInput={onInput}
              />
              <ButtonPrimary type="submit">
                Register
              </ButtonPrimary>
            </form>
          </fieldset>
        </FormSection>
      </>
    )
  } else {
    return <Loading/>
  }

}
