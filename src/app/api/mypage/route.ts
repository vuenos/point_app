import { connectDB } from "@/utils/connectMongDB";
import { NextRequest, NextResponse } from "next/server";
import Card from "@/models/cardModel";
import mongoose from "mongoose";
import { useSession } from "next-auth/react";

export async function GET(request: NextRequest) {
    // return NextResponse.json([
    //     {cardNumber: "983264923874932"},
    //     {cardNumber: "222222"}
    // ])
    // const { data: session } = useSession();

    // if (!session) {
    //     NextResponse.json(
    //         { message: "Unauthorized" },
    //         { status: 401 }
    //     );
    //     return;
    // }

    try {
        await connectDB();

        const cards = await Card.find({ });
        console.log("CARDS::", cards)
        return NextResponse.json(
            cards,
            { status: 200 }
        );        
    } catch (error) {
        return NextResponse.json({error: "Server Error"}, { status: 500});
    }
};