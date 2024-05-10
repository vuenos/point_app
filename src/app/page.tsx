'use client';
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";

export default function Home() {
  const [msg, setMsg] = useState<string>("");
  const [callStatus, setCallStatus] = useState<string>();
  const [array1, setArray1] = useState([0,1,2,3,4,5,6]);

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

  useEffect(() => {
    for (let i of array1) {
      console.log(i)
    }
  }, []);

  return (
    <main className={styles.main}>
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
