import connect from "@/utils/connectMongDB";

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

export async function POST(request: Request) {
    const client = await connect;
    const body = await request.json();
    await client.db("test").collection("users").insertOne({
        email: body.userEmail,
        name: body.userName,
        password: body.userPassword,
    });
    return Response.json({message: "successfully updated the document"})
}