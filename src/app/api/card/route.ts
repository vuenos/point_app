import {NextRequest, NextResponse} from "next/server";
import mongoose from "mongoose";
import Card from "@/models/cardModel";
import {connectDB} from "@/utils/connectMongDB";

export async function POST(req: NextRequest) {

  try {
    await connectDB();

    const {cardNumber, cvc, userEmail, userName, userId} = await req.json();

    if (!cardNumber || !cvc) {
      return NextResponse.json(
        {message: "Card number and CVC Number is required"},
        {status: 400},
      );
    }

    const newCard = new Card({
      cardNumber,
      cvc,
      userEmail,
      userName,
      userId,
    });

    const saveCard = await newCard.save();

    return NextResponse.json({
        cardNumber: saveCard.cardNumber,
        cvc: saveCard.cvc,
        email: saveCard.userEmail,
        name: saveCard.userName,
        id: saveCard.userId,
      },
      {status: 201}
    );

  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        {message: error.message},
        {status: 400},
      );
    } else {
      return new NextResponse("Server Error", {status: 500});
    }
  }
}
