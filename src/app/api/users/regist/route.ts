import connect from "@/utils/connectMongDB";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"

// export async function GET(request: Request) {
//     const client = await connect
//     const cursor = await client.db("test").collection("greetings").find();
//     const greetings = await cursor.toArray()
//     return Response.json(greetings)
//   }

// export async function POST(request: Request){
//     const client = await connect;
//     const register = await client.db("test").collection("users").insertOne({
//         email:"jintae.email@google.com",
//         name: "Jintae Kim",
//         Age: "32"
//     });
//     return Response.json({message: "successfully updated the document"})
// }

export async function POST(request: NextRequest) {
    try {
        const client = await connect;
        const body = await request.json();

        // const user = await User.findOne(body.email);

        // if (user) {
        //     return NextResponse.json({error: "User already exists"}, {status: 400})
        // }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(body.password, salt);

        // const newUser = new User({
        //     name: body.name,
        //     email: body.email,
        //     password: hashedPassword
        // })

        // const saveUser = await newUser.save();

        await client.db("test").collection("users").insertOne({
            name: body.name,
            email: body.email,
            password: hashedPassword
        });
        
        return NextResponse.json({
            message: "successfully updated the document",
            success: true,
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
