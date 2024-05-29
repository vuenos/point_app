import {NextRequest, NextResponse} from "next/server";
import connect from "@/utils/connectMongDB"

export async function GET(req: NextRequest) {
    const client = await connect;
    const usersData = await client.db("test").collection("users").find();
    const getUsers = await usersData.toArray();

    return NextResponse.json(getUsers);
}