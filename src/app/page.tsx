"use client";
import { useState } from "react";
import axios from "axios";
import { HomeSection } from "@/styles/HomeStyles";
import { ButtonPrimary } from "@/styles/ComponentStyles"

export default function Home() {
  const [msg, setMsg] = useState<string>("");
  const [callStatus, setCallStatus] = useState<string>();
  const [userData, setUserData] = useState<any>();

  const url = "/api";

  const CallStackSuccess = () => (
    <div className="status-msg" style={{ color: "blue" }}>🌝 {msg}</div>
  );

  const CallStackFailed = () => (
    <div className="status-msg" style={{ color: "red" }}>🧭 {msg}</div>
  )
  
  const callDataHandler = async () => {
    try {
      const { data, status } = await axios.get(`${url}/test`);

      if (status === 200) {
        console.log(data);
        console.log(status);
        setUserData(data);
        setCallStatus("suceess");
        setMsg(`서버에서 정상적으로 응답함 [${status}]`);
      }
    } catch(error: any) {
      console.log(error.message)
      setCallStatus("failed");
      setMsg(`서버 통신 실패 [${error.response.status} ${error.response.statusText}]`);
    };
  };

  return (
    <>
      <h2>Home</h2>

      <HomeSection>
        <ButtonPrimary type="button" onClick={callDataHandler}>데이터 요청 테스트 📡</ButtonPrimary>

        <div className="server-status">
          {(callStatus === "suceess") ? <CallStackSuccess/>
              : (callStatus === "failed") ? <CallStackFailed/>
                  : null
          }
          {userData && (
              <ul className="user-data">
                <li>Name: {userData?.name}</li>
                <li>Email: {userData?.email}</li>
                <li>Admin: {userData?.isAdmin ? "Yes" : "No"}</li>
              </ul>
          )}
        </div>
      </HomeSection>

    </>
  );
}
