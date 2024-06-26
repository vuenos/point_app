"use client";

import {FormEvent, useEffect, useState} from "react";
import {FormSection} from "@/styles/FormStyles";
import InputGroup from "@/components/forms/InputGroup";
import axios, {AxiosError} from "axios";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import Loading from "@/app/card/regist/loading";
import {ButtonPrimary, LinkStyle} from "@/styles/ComponentStyles";
import onInput from "@/utils/onInput";

export default function CardRegist() {

  const [error, setError] = useState();
  const {data: session, status} = useSession();
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const cardSaveResponse = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/card`, {
        cardNumber: formData.get("cardNumber"),
        cvc: formData.get("cvc"),
      });

      if (cardSaveResponse) return router.push("/")

    } catch (error: any) {
      console.log(error);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      }
    }
  }

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/member/login")
    }
  }, [status, router]);

  if (status === "authenticated") {
    return (
      <>
        <h2>Card Regist</h2>

        <FormSection>
          <fieldset>
            <legend>Input Card serial</legend>
            <form onSubmit={handleSubmit}>
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
              <ButtonPrimary>
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
