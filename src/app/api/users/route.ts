import {NextRequest, NextResponse} from "next/server";
import connect from "@/utils/connectMongDB"

export async function GET(req: NextRequest) {
    const client = await connect;
    const cursor = await client.db("test").collection("users").find();
    const getUsers = await cursor.toArray();

    return NextResponse.json(getUsers);
}
