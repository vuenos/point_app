'use client';
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";

export default function Home() {
  const [msg, setMsg] = useState(null);
  const [callStatus, setCallStatus] = useState<boolean>(false);
  const [array1, setArray1] = useState([0,1,2,3,4,5,6]);

  const CallStackSuccess = () => (
    <div style={{ color: "blue" }}>🌝 {msg}</div>
  );

  const CallStackFailed = () => (
    <div style={{ color: "red" }}>🧭 {msg}</div>
  )
  
  const callDataHandler = () => {
    axios.get("http://localhost:5500/getdata").then((res) => {
      console.log(res.data);
      setMsg(res.data);
      setCallStatus(true);
    }).catch((error) => {
      console.log(error.message);
      setMsg(error.message);
      setCallStatus(false);
    });
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
        {callStatus ? <CallStackSuccess /> : <CallStackFailed />}
      </div>
    </main>
  );
}
