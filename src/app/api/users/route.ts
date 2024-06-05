import {NextRequest, NextResponse} from "next/server";
import {connectDB} from "@/utils/connectMongDB"

export async function GET(req: NextRequest) {
    const client = await connectDB;
    const cursor = await client.db("test").collection("users").find();
    const getUsers = await cursor.toArray();

    return NextResponse.json(getUsers);
}
