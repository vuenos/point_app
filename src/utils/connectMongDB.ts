import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGO_URI) {
    throw new Error("Invalid/Missing enviroment variable: 'MONGO_URI'");
}

const uri = process.env.MONGO_URI;
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
    // development 모드에서는 HMR(Hot Module Replacement)로 인한 모듈 재로드 시 값이 유지되도록 전역 변수를 사용 합니다.
    let globalWithMongo = global as typeof globalThis & {
        _mongoClientPromise?: Promise<MongoClient>
    }

    if (!globalWithMongo._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
    }
    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    // Production 모드에서는 전역변수를 사용하지 않는 것이 좋다.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
