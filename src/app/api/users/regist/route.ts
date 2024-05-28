import connect from "@/utils/connectMongDB";

// export async function GET(request: Request) {
//     const client = await connect
//     const cursor = await client.db("test").collection("greetings").find();
//     const greetings = await cursor.toArray()
//     return Response.json(greetings)
//   }

export async function POST(request: Request){
    const client = await connect;
    const cursor = await client.db("test").collection("users").insertOne({
        email:"vuenos@gmail.com",
        name: "Jintae Kim",
        Age: "22"
    });
    return Response.json({message: "successfully updated the document"})
  }