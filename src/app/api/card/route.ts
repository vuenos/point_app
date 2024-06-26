import {NextRequest, NextResponse} from "next/server";
import mongoose from "mongoose";
import Card from "@/models/cardModel";
import {connectDB} from "@/utils/connectMongDB";

// import {useSession} from "next-auth/react";

export async function POST(req: NextRequest, res: NextResponse) {
  // const {data: session} = useSession();

  try {
    await connectDB();

    // if (!session) {
    //   return NextResponse.json(
    //     {message: "Unauthorized"},
    //     {status: 401},
    //   )
    // }

    const {cardNumber, cvc} = await req.json();
    // const {email: userEmail, name: userName} = session.user;

    if (!cardNumber || !cvc) {
      return NextResponse.json(
        {message: "Card number and CVC are required"},
        {status: 400},
      );
    }

    const newCard = new Card({
      cardNumber,
      cvc,
      // userEmail,
      // userName,
    });

    const saveCard = await newCard.save();

    return NextResponse.json({
        cardNumber: saveCard.cardNumber,
        cvc: saveCard.cvc,
        // email: saveCard.userEmail,
        // name: saveCard.userName,
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
      return new NextResponse("Database Error", {status: 500});
    }
  }
}
