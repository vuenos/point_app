import {NextRequest, NextResponse} from "next/server";
import mongoose from "mongoose";
import Card from "@/models/cardModel";
import {connectDB} from "@/utils/connectMongDB";
import {useSession} from "next-auth/react";

export async function POST(req: NextRequest, res: NextResponse) {
  const {data: session} = useSession();

  try {
    await connectDB();

    if (!session) {
      return NextResponse.json(
        {message: "Unauthorized"},
        {status: 401},
      )
    }

    const {cardNumber, cvc} = await req.json();
    const {email, name} = session.user;

    if (!cardNumber || !cvc) {
      return NextResponse.json(
        {message: "Card number and CVC are required"},
        {status: 400},
      );
    }

    const newCard = new Card({
      cardNumber,
      cvc,
      email,
      name,
    });

    const saveCard = await newCard.save();

    return NextResponse.json({
        cardNumber: saveCard.cardNumber,
        cvc: saveCard.cvc,
      },
      {status: 201}
    );

  } catch (error: any) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        {message: error.message},
        {status: 400},
      );
    } else {
      console.error("Error during card save: ", error);
      return NextResponse.error();
    }
  }
}
