"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [msg, setMsg] = useState<string>("");
  const [callStatus, setCallStatus] = useState<string>();
  const [userData, setUserData] = useState<any>();

  const CallStackSuccess = () => (
    <div style={{ color: "blue" }}>🌝 Response OK</div>
  );

  const CallStackFailed = () => (
    <div style={{ color: "red" }}>🧭 {msg}</div>
  )
  
  const callDataHandler = async () => {
    try {
      const { data, status } = await axios.get("/api/users/");

      if (status === 200) {
        console.log(data);
        setUserData(data);
        setCallStatus("suceess");
        setMsg("서버에서 정상적으로 응답함");
      }
    } catch(error: any) {
      console.log("서버 통신을 실패하였습니다.");
      setCallStatus("failed");
      setMsg("서버 통신 실패");
    };
  };

  return (
    <>
      <button onClick={callDataHandler}>데이터 요청</button>

      <div>
        {(callStatus === "suceess") ? <CallStackSuccess />
          : (callStatus === "failed") ? <CallStackFailed />
          : null
        }
        {userData?.name}{userData?.email}
      </div>
    </>
  );
}
