import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
    return NextResponse.json({
        name: "Jintae Kim",
        email: "vuenos@gmail.com",
        isAdmin: true,
    })
}