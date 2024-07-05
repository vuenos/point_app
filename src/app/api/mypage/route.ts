import { connectDB } from "@/utils/connectMongDB";
import { NextRequest, NextResponse } from "next/server";
import Card from "@/models/cardModel";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";

export async function GET(req, res) {
    // return NextResponse.json([
    //     {cardNumber: "983264923874932"},
    //     {cardNumber: "222222"}
    // ])

    const session = await getServerSession(authOptions);

    try {
        await connectDB();

        if(session) {
            const cards = await Card.find({ userId: session?.user._id });
            return NextResponse.json(
                cards,
                { status: 200 }
            );
        } else {
            res.status(401);
        }
    } catch (error) {
        return NextResponse.json({error: "Server Error"}, { status: 500});
    }
};