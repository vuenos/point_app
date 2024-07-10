"use client";

import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import axios, {AxiosError} from "axios";
import {useRouter} from "next/navigation";
import {CalloutBox, CardList, SkeletonSpan} from "@/styles/ComponentStyles";
import {MyId} from "@/styles/MypageStyles";
import {Playfair_Display} from "next/font/google";

const playfair = Playfair_Display({subsets: ["latin"]});

export default function Mypage() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState();
  const {data: session, status} = useSession();
  const router = useRouter();

  const getUserCards = async () => {

    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/mypage`);
      if (res.status === 200) {
        setCards(res.data);
        console.log("DATA::", res.data)
      }
    } catch (error) {
      console.log(error.message);
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data.message;
        setError(errorMessage);
      }
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/member/login");
    }
  }, [status]);

  useEffect(() => {
    if (session) {
      getUserCards();
    }
  }, [session]);

  if (status === "loading") {
    return (
      <>
        <h2>My page</h2>
        <CardList>
          <li>
            <SkeletonSpan width="140px" height="16px" margin="0 0 0 0" border-radius="8px"/>
            <SkeletonSpan width="100px" height="32px" margin="40px 0 0 0" border-radius="8px"/>
          </li>
        </CardList>
      </>
    )
  }

  return (
    <>
      <h2>My page</h2>
      <MyId>{session?.user._id}</MyId>
      {cards.length === 0 ? (
        <>
          {error && <CalloutBox className="error"><h4 className="title">Error</h4> {error}</CalloutBox>}
          <div>No cards found</div>
        </>
      ) : (
        <CardList>
          {cards.map((card) => (
            <li key={card._id}>
              <div className="user-id">{card.userId}</div>
              <div className={`card-number ${playfair.className}`}>
                <span>{card.cardNumber.toString().slice(0, 4)}</span>
                <span>{card.cardNumber.toString().slice(4, 8)}</span>
                <span>{card.cardNumber.toString().slice(8, 12)}</span>
              </div>
              <div className="meta-data">
                <span>
                  <sup>DATE</sup>
                  {card.createdAt.slice(5, 10, "").replaceAll("-", "/")}
                </span>
                <span>
                  <sup>CVC</sup>
                  {card.cvc}
                </span>
              </div>
              <div className="user-name">
                <sup>NAME</sup>
                {card.userName}
              </div>
            </li>
          ))}
        </CardList>
      )}
    </>
  );
}
