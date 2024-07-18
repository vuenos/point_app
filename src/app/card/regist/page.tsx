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

  const [errorMsg, setErrorMsg] = useState<string>("");
  const [saveDisabled, setSaveDisabled] = useState<boolean>(false);
  const {data: session, status} = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    cardNumber: "",
    cvc: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/member/login");
    }
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaveDisabled(true);

    try {
      const formData = new FormData(event.currentTarget);
      const res = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/card`, {
        cardNumber: formData.get("cardNumber"),
        cvc: formData.get("cvc"),
        userEmail: formData.get("userEmail"),
        userName: formData.get("userName"),
        userId: formData.get("userId"),
      });
      if (res.status === 200) {
        //
        setLoading(true);
      }
      console.log(res.data)

    } catch (error) {
      console.log(error.message);
      setLoading(false);
      setSaveDisabled(false);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setErrorMsg(errorMessage);
      }
    } finally {
      setLoading(false);
      setSaveDisabled(false);
      setFormData({
        cardNumber: "",
        cvc: "",
      });
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    // 정규식을 사용하여 숫자만 허용
    if (/^\d*$/.test(value)) {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  if (loading) {
    return <Loading />
  }

  if (status === "authenticated") {
    return (
      <>
        <FormSection>
          <fieldset>
            <legend>Add Card</legend>
            <form onSubmit={handleSubmit}>
              {errorMsg && <CalloutBox className="error"><h4 className="title">Info</h4> {errorMsg}</CalloutBox>}

              <InputGroup
                type="text"
                title="Card serial number"
                label="Card serial number"
                placeholder="Input card serial number 12 digits"
                name="cardNumber"
                value={formData.cardNumber}
                maxlength={12}
                minlength={12}
                onchange={handleChange}
                onInput={onInput}
              />
              <InputGroup
                type="text"
                title="CVC"
                label="CVC"
                placeholder="input CVC number 3 digits"
                name="cvc"
                value={formData.cvc}
                onchange={handleChange}
                maxlength={3}
                minlength={3}
                onInput={onInput}
              />
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
                type="text"
                name="userId"
                defaultValue={session?.user._id}
                readonly={true}
              />
              <ButtonPrimary type="submit" disabled={saveDisabled}>
                {saveDisabled ? "Saving..." : "Save Card"}
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
