import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongDB Connected ${conn.connection.host}`.cyan.underline);

    } catch (error) {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
    }
}

export default connectDB;