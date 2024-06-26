import {NextRequest, NextResponse} from "next/server";
import mongoose from "mongoose";
import Card from "@/models/cardModel";
import {connectDB} from "@/utils/connectMongDB";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectDB();

    const {cardNumber, cvc} = await req.json();

    if (!cardNumber || !cvc) {
      return NextResponse.json(
        {message: "Card number and CVC are required"},
        {status: 400},
      );
    }

    const newCard = new Card({
      cardNumber,
      cvc
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
