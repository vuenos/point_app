"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [msg, setMsg] = useState<string>("");
  const [callStatus, setCallStatus] = useState<string>();

  const CallStackSuccess = () => (
    <div style={{ color: "blue" }}>🌝 {msg}</div>
  );

  const CallStackFailed = () => (
    <div style={{ color: "red" }}>🧭 {msg}</div>
  )
  
  const callDataHandler = async () => {
    try {
      const { data, status } = await axios.get("http://localhost:5500/getdata");

      if (status === 200) {
        setMsg(data);
        setCallStatus("suceess");
      }
    } catch(error: any) {
      setMsg("서버 통신을 실패하였습니다.");
      setCallStatus("failed");
    };
  };

  return (
    <main>
      <button onClick={callDataHandler}>데이터 요청</button>

      <div>
        {msg && (callStatus === "suceess") ? <CallStackSuccess /> 
          : (callStatus === "failed") ? <CallStackFailed />
          : null
        }
      </div>
    </main>
  );
}
